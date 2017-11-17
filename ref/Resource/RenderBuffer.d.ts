import GLResource from "./GLResource";
export default class RenderBuffer extends GLResource<WebGLRenderbuffer> {
    constructor(gl: WebGLRenderingContext);
    update(format: number, width: number, height: number): void;
    bind(): void;
    destroy(): void;
}
