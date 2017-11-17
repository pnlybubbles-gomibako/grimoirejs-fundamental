export declare class ResourceCache {
    private _lastUsedPrograms;
    /**
       * Save the specified WebGLProgram as last used program.
       * And check the specified program was used last time.
       */
    useProgramCheck(gl: WebGLRenderingContext, program: WebGLProgram): boolean;
}
declare const _default: ResourceCache;
export default _default;
