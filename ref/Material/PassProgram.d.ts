import Geometry from "../Geometry/Geometry";
import ManagedProgram from "../Resource/ManagedProgram";
/**
 * Container of shader program used for Pass.
 * Pass needs to care which geometry will be drawn by a material.
 * (For determining what macro should be appended to shader by attribute variable exisiting)
 */
export default class PassProgram {
    private _gl;
    private _vsSource;
    private _fsSource;
    private _macros;
    /**
     * macros registered dynamically of this programs
     * @return {[type]} [description]
     */
    macros: {
        [key: string]: any;
    };
    /**
     * Original fragment shader code
     * @return {string} [description]
     */
    /**
     * Original vertex shader code
     * @param  {string} source [description]
     * @return {[type]}        [description]
     */
    fragmentShader: string;
    vertexShader: string;
    private _programs;
    private _shaders;
    constructor(_gl: WebGLRenderingContext, _vsSource: string, _fsSource: string, _macros?: {
        [key: string]: any;
    });
    /**
     * Fetch a program instance with specified geometry
     * @param  {Geometry}       geometry [description]
     * @return {ManagedProgram}          [description]
     */
    getProgram(geometry: Geometry): ManagedProgram;
    /**
     * Update programs with specified macro value.
     * @param {string}         macroName [description]
     * @param {string|boolean} value     [description]
     */
    setMacro(macroName: string, value?: string | boolean): void;
    /**
     * Destroy instance to relase resources.
     */
    dispose(): void;
    private _constructProgram(geometry);
}
