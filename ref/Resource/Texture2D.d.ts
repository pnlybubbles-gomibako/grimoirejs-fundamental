import Texture from "./Texture";
import Viewport from "./Viewport";
export declare type ImageUploadConfig = {
    flipY?: boolean;
    premultipliedAlpha?: boolean;
};
export default class Texture2D extends Texture {
    static defaultTextures: Map<WebGLRenderingContext, Texture2D>;
    static maxTextureSize: number;
    static generateDefaultTexture(gl: WebGLRenderingContext): void;
    /**
     * Width of this texture
     * @return {number} [description]
     */
    readonly width: number;
    /**
     * Height of this texture
     * @return {number} [description]
     */
    readonly height: number;
    readonly viewport: Viewport;
    readonly drawerContext: CanvasRenderingContext2D;
    private _drawerContext;
    private _width;
    private _height;
    constructor(gl: WebGLRenderingContext);
    update(level: number, width: number, height: number, border: number, format: number, type: number, pxiels?: ArrayBufferView, config?: ImageUploadConfig): void;
    update(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, config?: ImageUploadConfig): void;
    updateDrawerCanvas(): void;
    getRawPixels<T extends ArrayBufferView = ArrayBufferView>(x?: number, y?: number, width?: number, height?: number): T;
    applyDraw(): void;
    protected __ensureMipmap(): void;
}
