import GLResource from "./GLResource";
import Shader from "./Shader";
import UniformProxy from "./UniformProxy";
/**
 * Manages WebGLProgram related stuff.
 */
export default class Program extends GLResource<WebGLProgram> {
    /**
     * Reference to uniform proxy which help you to pass uniform variables.
     * @type {UniformProxy}
     */
    uniforms: UniformProxy;
    private _uniformLocations;
    private _attributeLocations;
    constructor(gl: WebGLRenderingContext);
    /**
     * Check this program is the last used one or not.
     * @return {boolean} [description]
     */
    readonly isLastUsed: boolean;
    /**
     * Update program with shader instance.
     * The array might be set of vertex shader and fragment shader couple.
     * @param {Shader[]} shaders [description]
     */
    update(shaders: Shader[]): void;
    /**
     * Use this program for drawing.
     */
    use(): void;
    /**
     * Destroy this instance.
     */
    destroy(): void;
    /**
     * Fetch attribute location from this program.
     * @param  {string} variableName [description]
     * @return {number}              [description]
     */
    findAttributeLocation(variableName: string): number;
    /**
     * Fetch uniform location from this program
     * @param  {string}               variableName [description]
     * @return {WebGLUniformLocation}              [description]
     */
    findUniformLocation(variableName: string): WebGLUniformLocation;
    private _safeEnableVertexAttribArray(location);
}
