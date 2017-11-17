import GLResource from "./GLResource";
import RenderBuffer from "./RenderBuffer";
import Texture2D from "./Texture2D";
export default class FrameBuffer extends GLResource<WebGLFramebuffer> {
    constructor(gl: WebGLRenderingContext);
    update(boundTo: RenderBuffer, attachTo?: number): void;
    update(boundTo: Texture2D, level?: number, bindIndex?: number): void;
    bind(): void;
    destroy(): void;
}
