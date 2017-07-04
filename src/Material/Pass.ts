import ManagedProgram from "../Resource/ManagedProgram";
import ManagedShader from "../Resource/ManagedShader";
import MaterialFactory from "./MaterialFactory";
import Geometry from "../Geometry/Geometry";
import UniformProxy from "../Resource/UniformProxy";
import UniformResolverRegistry from "./UniformResolverRegistry";
import Material from "./Material";
import IPassRecipe from "./IPassRecipe";
import IMaterialArgument from "./IMaterialArgument";
import GLStateConfigurator from "./GLStateConfigurator";
import ShaderMixer from "./ShaderMixer";
import UniformResolverContainer from "./UniformResolverContainer";
import PassProgram from "./PassProgram";
import Technique from "./Technique";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

export default class Pass {

  public program: PassProgram;

  public get material(): Material {
    return this.technique.material;
  }

  public argumentDeclarations: { [key: string]: IAttributeDeclaration } = {};

  /**
   * Values of materila arguments.
   * These values would be passed to GPU for rendering.
   */
  public arguments: { [key: string]: any } = {};

  private _macro: { [key: string]: any } = {};

  private _macroHandlers: { [key: string]: (value: any) => void } = {};

  private _uniformResolvers: UniformResolverContainer;

  private _gl: WebGLRenderingContext;

  private _argumentInitialized: boolean;

  constructor(public technique: Technique, public passRecipe: IPassRecipe) {
    this._uniformResolvers = UniformResolverRegistry.generateRegisterers(this, passRecipe);
    this._gl = this.material.gl;
    const factory = MaterialFactory.get(this._gl);
    const macroRegister = factory.macro;
    // register macro
    for (let key in passRecipe.macros) {
      const macro = passRecipe.macros[key];
      this._macro[macro.macroName] = macro.value;
      if (macro.target === "expose") {
        this._macroHandlers[key] = (value) => { // when changed the macro
          if (macro.type === "bool") {
            this._macro[macro.macroName] = value ? "" : undefined;
          } else {
            this._macro[macro.macroName] = value;
          }
          this.program.macros = this._macro;
        };
        this.addArgument(key, {
          converter: macro.type === "bool" ? "Boolean" : "Number",
          default: macro.value
        });
      } else if (macro.target === "refer") {
        this._macro[macro.macroName] = macro.value;
        macroRegister.watch(macro.macroName, (val, immediate) => {
          this._macro[macro.macroName] = val;
          if (!immediate) {
            this.program.macros = this._macro;
          }
        }, true);
      }
    }
    this.program = new PassProgram(this._gl, passRecipe.vertex, passRecipe.fragment, this._macro);
  }

  public draw(args: IMaterialArgument): void {
    const p = this.program.getProgram(args.geometry);
    p.use();
    this._uniformResolvers.resolve(p.uniforms, args);
    GLStateConfigurator.configureForPass(this._gl, this.passRecipe); // configure for gl states
    for (let key in this.passRecipe.attributes) {
      const attribute = this.passRecipe.attributes[key];
      Geometry.bindBufferToAttribute(args.geometry, p, key, attribute.semantic);
    }
    Geometry.drawWithCurrentVertexBuffer(args.geometry, args.targetBuffer, args.drawCount, args.drawOffset);
  }

  /**
   * Append an argument as pass variable.
   * This is mainly used for resolving uniform stages.
   */
  public addArgument(name: string, val: IAttributeDeclaration): void {
    if (this._argumentInitialized) {
      throw new Error(`setArgument cant be called for initialized pass`);
    }
    this.argumentDeclarations[name] = val;
  }

  public setArgument(variableName: string, newValue: any, oldValue: any): void {
    if (this._macroHandlers[variableName]) { // if the value was macro
      this._macroHandlers[variableName](newValue);
    } else {
      this._uniformResolvers.update(this.program, variableName, newValue, oldValue);
    }
    this.arguments[variableName] = newValue;
  }

  public dispose(): void {
    this._uniformResolvers.dispose();
    this.program.dispose();
  }
}
