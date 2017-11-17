import GLRelatedRegistryBase from "./GLRelatedRegistryBase";
import IGLSLPrecision from "./IGLSLPrecision";
export default class GLSLPrecisionChecker extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    static get(gl: WebGLRenderingContext): GLSLPrecisionChecker;
    vertexInteger: IGLSLPrecision;
    fragmentInteger: IGLSLPrecision;
    vertexFloat: IGLSLPrecision;
    fragmentFloat: IGLSLPrecision;
    constructor(gl: WebGLRenderingContext);
}
