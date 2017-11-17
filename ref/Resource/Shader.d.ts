import GLResource from "./GLResource";
export default class Shader extends GLResource<WebGLShader> {
    readonly type: number;
    sourceCode: string;
    constructor(gl: WebGLRenderingContext, type: number, sourceCode?: string);
    update(source: string): void;
    destroy(): void;
    private _insertLineNumbers(source);
}
