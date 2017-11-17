import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IMaterialArgument from "./IMaterialArgument";
import Material from "./Material";
import PassProgram from "./PassProgram";
import IPassRecipe from "./Schema/IPassRecipe";
import Technique from "./Technique";
/**
 * Pass provides single draw call for a geometry.
 * Containing arguments of uniform variables and gl state configruations for each drawing call.
 * @return {Material} [description]
 */
export default class Pass {
    technique: Technique;
    passRecipe: IPassRecipe;
    /**
     * Pass program instance. This is not actual WebGLProgram instance.
     * Pass will determine which WebGLProgram should be used by considering which geometry was used in actual drawing timing.
     * @return {Material} [description]
     */
    program: PassProgram;
    /**
     * Get related material
     */
    readonly material: Material;
    /**
     * Declaration of argument attributes.
     * @param  {Technique}   publictechnique  [description]
     * @param  {IPassRecipe} publicpassRecipe [description]
     * @return {[type]}                       [description]
     */
    argumentDeclarations: {
        [key: string]: IAttributeDeclaration;
    };
    /**
     * Values of materila arguments.
     * These values would be passed to GPU for rendering.
     */
    arguments: {
        [key: string]: any;
    };
    private _macroHandlers;
    private _uniformResolvers;
    private _dynamicStateResolver;
    private _gl;
    private _argumentInitialized;
    constructor(technique: Technique, passRecipe: IPassRecipe);
    /**
     * Execute single drawcall with specified arguments.
     * @param {IMaterialArgument} args [description]
     */
    draw(args: IMaterialArgument): void;
    /**
     * Append an argument as pass variable.
     * This is mainly used for resolving uniform stages.
     */
    addArgument(name: string, val: IAttributeDeclaration): void;
    /**
     * Update argument of specified value.
     */
    setArgument(variableName: string, newValue: any, oldValue: any): void;
    /**
     * Destroy pass to release resources.
     */
    dispose(): void;
}
