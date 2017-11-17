import GLResource from "./GLResource";
import IResizeResult from "./IResizeResult";
export default abstract class Texture extends GLResource<WebGLTexture> {
    textureType: number;
    private static _resizerCanvas;
    private static _resizerContext;
    /**
    * ミップマップの更新が必要なフィルタ
    * @type {number[]}
    */
    private static _filtersNeedsMipmap;
    magFilter: number;
    minFilter: number;
    wrapS: number;
    wrapT: number;
    readonly format: number;
    readonly type: number;
    protected __format: number;
    protected __type: number;
    private _texParameterChanged;
    private _magFilter;
    private _minFilter;
    private _wrapS;
    private _wrapT;
    constructor(gl: WebGLRenderingContext, textureType: number);
    destroy(): void;
    register(registerNumber: number): void;
    protected __getRawPixels<T extends ArrayBufferView = ArrayBufferView>(type: number, format: number, x: number, y: number, width: number, height: number, from: number): T;
    /**
     * Ensure specified resource is POT(Power of Two) resource.
     * If speciefied resource was NPOT, resize specified resource to POT.
     * @param image
     */
    protected __ensurePOT(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): IResizeResult;
    protected abstract __ensureMipmap(): void;
    /**
     * Check specified min filter requires mip map or not.
     * @param minFilter min filter type
     */
    protected __needMipmap(minFilter: number): boolean;
    /**
     * Apply texParameteri parameters before updating texture
     */
    protected __applyTexParameter(): void;
    private _ensureImagePOT(img);
    private _ensureCanvasPOT(canvas);
    private _ensureVideoPOT(video);
    private _resizeImageOrVideo(resource, width, height);
}
