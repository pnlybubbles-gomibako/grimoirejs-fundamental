import Shader from "./Shader";
/**
 * Provides abstraction of shader instance.
 * If specified shader source was instanced already, delegate actual instance.
 * And counts reference of shader and if that shader was released and the count is zero, this shader resource would be deleted automatically.
 *
 * DO NOT instanciate this class directly. Use getShader method instead.
 */
export default class ManagedShader extends Shader {
    readonly type: number;
    sourceCode: string;
    hash: number;
    private static _managedShaders;
    /**
     * Obtain a reference to shader.
     * @param  {WebGLRenderingContext} gl     [description]
     * @param  {number}                type   [description]
     * @param  {string}                shader [description]
     * @return {ManagedShader}                [description]
     */
    static getShader(gl: WebGLRenderingContext, type: number, shader: string): ManagedShader;
    private _referenceCount;
    constructor(gl: WebGLRenderingContext, type: number, sourceCode: string, hash: number);
    /**
     * Release shader instance from reference.
     * Do not call this method dupelicately per a getShader call.
     *
     * That would make this shader disposed unintendedly.
     */
    release(): void;
}
