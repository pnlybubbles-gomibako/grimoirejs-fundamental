import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import GLRelatedRegistryBase from "../Resource/GLRelatedRegistryBase";
import Geometry from "./Geometry";
import IGeometryFactoryDelegate from "./IGeometryFactoryDelegate";
/**
 * Provides the feature to instanciate primitive geometry.
 */
export default class GeometryFactory extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    /**
     * Delegates to be used as factory
     */
    static factoryDelegates: {
        [typeName: string]: IGeometryFactoryDelegate;
    };
    /**
     * Argument inputs to be used for construction of geometry.
     */
    static factoryArgumentDeclarations: {
        [typeName: string]: {
            [argName: string]: IAttributeDeclaration;
        };
    };
    static factoryExtentions: {
        [typeName: string]: ((geometry: Geometry, attrs: {
            [attrKey: string]: any;
        }) => void)[];
    };
    /**
     * Get geometry factory by WebGLRenderingContext
     * @param gl
     */
    static get(gl: WebGLRenderingContext): GeometryFactory;
    /**
     * Add new type geometry
     * @param {string}                   typeName        [description]
     * @param {IAttributeDeclaration }}             argumentDeclarations [description]
     * @param {IGeometryFactoryDelegate} factoryDelegate [description]
     */
    static addType(typeName: string, argumentDeclarations: {
        [argName: string]: IAttributeDeclaration;
    }, factoryDelegate: IGeometryFactoryDelegate): void;
    static extend(typeName: string, extender: (geometry: Geometry, attrs: {
        [attrKey: string]: any;
    }) => Promise<void> | void): void;
    constructor(gl: WebGLRenderingContext);
    instanciate(type: string, args: {
        [argName: string]: any;
    }): Promise<Geometry>;
    instanciateAsDefault(type: string): Promise<Geometry>;
}
