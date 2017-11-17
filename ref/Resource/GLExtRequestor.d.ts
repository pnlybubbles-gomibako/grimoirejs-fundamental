import GLRelatedRegistryBase from "./GLRelatedRegistryBase";
export default class GLExtRequestor extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    /**
     * Some of extensions needed to override resolving extensions by this.
     */
    static _customExtensionResolvers: {
        [key: string]: (gl: WebGLRenderingContext) => any;
    };
    static _requestObserver: ((name: string) => void)[];
    static get(gl: WebGLRenderingContext): GLExtRequestor;
    /**
     * Extension list requested to use.
     * @type {string[]}
     */
    private static _requestedExtensions;
    /**
     * Check specified extension was supported on this device.
     * Note: This method would throw an exception if there was no WebGL context initialized yet.
     * @param  {string}  extName [description]
     * @return {boolean}         [description]
     */
    static supported(extName: string): boolean;
    /**
     * Request extension to use.
     * @param {string} str [description]
     */
    static request(extName: string, isNecessary?: boolean): void;
    private static _getFirst();
    private static _requestIndexOf(extName);
    extensions: {
        [key: string]: any;
    };
    private _readyExtensions;
    constructor(gl: WebGLRenderingContext);
    /**
     * Resolve all extension requested already.
     */
    private _resolveRequested();
    private _resolveExtensionSafely(extName);
    private _resolveExtension(name);
}
