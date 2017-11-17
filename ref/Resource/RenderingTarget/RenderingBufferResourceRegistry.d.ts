import GLRelatedRegistryBase from "../GLRelatedRegistryBase";
import Renderbuffer from "../RenderBuffer";
import Texture2D from "../Texture2D";
/**
 * =
 */
export default class RenderingBufferResourceRegistry extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    /**
     * Obtain reference of the class by WebGLRenderingContext.
     * @param gl
     */
    static get(gl: WebGLRenderingContext): RenderingBufferResourceRegistry;
    backbuffers: {
        [key: string]: Texture2D;
    };
    depthBuffers: {
        [key: string]: Renderbuffer;
    };
    constructor(gl: WebGLRenderingContext);
    setBackbuffer(name: string, backbuffer: Texture2D): void;
    getBackbuffer(name: string): Texture2D;
    setDepthBuffer(name: string, depthBuffer: Renderbuffer): void;
    getDepthBuffer(name: string): Renderbuffer;
}
