/**
 * Abstraction of resource related class.
 * Provides unique index for each resources, promise for wating resource available and destroyed flag.
 */
declare abstract class ResourceBase {
    gl: WebGLRenderingContext;
    private static _maxIndex;
    readonly index: number;
    destroyed: boolean;
    validPromise: Promise<ResourceBase>;
    private _valid;
    private _validResolve;
    valid: boolean;
    constructor(gl: WebGLRenderingContext);
    destroy(): void;
}
export default ResourceBase;
