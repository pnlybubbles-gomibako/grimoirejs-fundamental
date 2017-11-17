import FrameBuffer from "../FrameBuffer";
import RenderBuffer from "../RenderBuffer";
import Texture2D from "../Texture2D";
import Viewport from "../Viewport";
import IRenderingTarget from "./IRenderingTarget";
/**
 * Render target contains texture and render buffer
 */
export default class OffscreenRenderTarget implements IRenderingTarget {
    gl: WebGLRenderingContext;
    textures: Texture2D[];
    depthBuffer: RenderBuffer;
    readonly fbo: FrameBuffer;
    readonly texture: Texture2D;
    constructor(gl: WebGLRenderingContext, textures: Texture2D[], depthBuffer?: RenderBuffer);
    beforeDraw(clearFlag: number, color: number[], depth: number): void;
    getBufferWidth(): number;
    getBufferHeight(): number;
    getViewport(): Viewport;
    bind(): void;
}
