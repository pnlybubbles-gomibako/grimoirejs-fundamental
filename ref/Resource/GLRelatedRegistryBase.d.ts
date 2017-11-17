/**
 * Registry of gl related stuff. These instance are singleton for each gl context.
 */
export default class GLRelatedRegistryBase {
    private static _glRelatedRegistry;
    /**
     * Get specified resource by glContext and constructor of registry
     * @param gl
     * @param ctor
     */
    protected static __get<T>(gl: WebGLRenderingContext, ctor: {
        new (gl: WebGLRenderingContext): T;
        registryName: string;
    }): T;
    protected static __getAll<T>(ctor: {
        new (gl: WebGLRenderingContext): T;
        registryName: string;
    }): T[];
}
