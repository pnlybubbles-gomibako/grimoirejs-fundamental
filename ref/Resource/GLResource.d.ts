/**
 * Abstraction of gl resource related class.
 * Provides unique index for each resources, promise for wating resource available and destroyed flag.
 */
declare abstract class GLResource<T> {
    gl: WebGLRenderingContext;
    resourceReference: T;
    private static _maxIndex;
    readonly index: number;
    destroyed: boolean;
    validPromise: Promise<GLResource<T>>;
    private _valid;
    private _metadata;
    private _validResolve;
    valid: boolean;
    /**
     * Metadata containing some useful data for glresource in Debugging.
     */
    readonly metadata: {
        [key: string]: any;
    };
    constructor(gl: WebGLRenderingContext, resourceReference: T);
    /**
     * Provide metadata for key
     * @param key key of the metadata
     * @param value value of the metadata
     */
    setMetadata(key: string, value: any): void;
    destroy(): void;
}
export default GLResource;
