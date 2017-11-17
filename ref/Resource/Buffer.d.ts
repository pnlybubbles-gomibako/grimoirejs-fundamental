import GLResource from "./GLResource";
export default class Buffer extends GLResource<WebGLBuffer> {
    readonly target: number;
    usage: number;
    /**
     * If this flag was true, buffer instance will keep Float32Array on class field.
     */
    keepSource: boolean;
    readonly bufferSource: BufferSource;
    private _bufferSource;
    constructor(gl: WebGLRenderingContext, target?: number, usage?: number);
    update(length: number): void;
    update(buffer: BufferSource): void;
    update(offset: number, buffer: BufferSource): void;
    bind(): void;
    destroy(): void;
}
