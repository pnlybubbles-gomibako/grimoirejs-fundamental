import Program from "./Program";
import Shader from "./Shader";
export default class ManagedProgram extends Program {
    hash: number;
    private static _managedPrograms;
    static getProgram(gl: WebGLRenderingContext, shaders: Shader[]): ManagedProgram;
    private _referenceCount;
    constructor(gl: WebGLRenderingContext, hash: number);
    release(): void;
}
