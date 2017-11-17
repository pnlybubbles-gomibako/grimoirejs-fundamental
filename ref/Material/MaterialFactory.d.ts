import NameResolver from "../Asset/NameResolver";
import GLRelatedRegistryBase from "../Resource/GLRelatedRegistryBase";
import MacroRegistory from "./MacroRegistory";
import Material from "./Material";
/**
 * Manage materialGenerators for materials.
 * Materials can be instanciated with this instance.
 * Every gl reference can contain 1 of MaterialFactory at most.
 */
export default class MaterialFactory extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    static defaultShaderHeader: string;
    static materialGeneratorResolver: NameResolver<(factory: MaterialFactory) => Material>;
    /**
     * Obtain an instance of MaterialFactory from WebGLRenderingContext
     * @param  {WebGLRenderingContext} gl [description]
     * @return {MaterialFactory}          [description]
     */
    static get(gl: WebGLRenderingContext): MaterialFactory;
    static addMaterialType(typeName: string, materialGenerator: (factory: MaterialFactory) => Material): void;
    /**
     * Add source of .sort material as specified typename.
     * @param  {string}        typeName [description]
     * @param  {string}        source   [description]
     * @return {Promise<void>}          [description]
     */
    static addSORTMaterial(typeName: string, source: string): Promise<(factory: MaterialFactory) => Material>;
    /**
     * Add source of .sort material from external url as specified typeName.
     * @param  {string}        typeName [description]
     * @param  {string}        url      [description]
     * @return {Promise<void>}          [description]
     */
    static addSORTMaterialFromURL(typeName: string, url: string): Promise<(factory: MaterialFactory) => Material>;
    static getMaterialStatus(typeName: string): number;
    shaderHeader: string;
    macro: MacroRegistory;
    constructor(gl: WebGLRenderingContext);
    instanciate(typeName: string): Promise<Material>;
}
