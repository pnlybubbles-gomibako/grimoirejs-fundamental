import Color3 from "grimoirejs-math/ref/Color3";
import Color4 from "grimoirejs-math/ref/Color4";
import Matrix from "grimoirejs-math/ref/Matrix";
import Vector2 from "grimoirejs-math/ref/Vector2";
import Vector3 from "grimoirejs-math/ref/Vector3";
import Vector4 from "grimoirejs-math/ref/Vector4";
import Program from "./Program";
import Texture2D from "./Texture2D";
export default class UniformProxy {
    program: Program;
    private _gl;
    private _currentTextureRegister;
    constructor(program: Program);
    uniformBool(variableName: string, val: boolean): void;
    uniformMatrix(variableName: string, mat: Matrix): void;
    uniformMatrix3(variableName: string, mat: Matrix): void;
    uniformMatrixArray(variableName: string, matricies: Float32Array): void;
    uniformFloat(variableName: string, val: number): void;
    uniformFloatArray(variableName: string, val: number[]): void;
    uniformInt(variableName: string, val: number): void;
    uniformVector2(variableName: string, val: Vector2): void;
    uniformIntVector2(variableName: string, val: Vector2): void;
    uniformVector2Array(variableName: string, val: number[] | Float32Array): void;
    uniformVector3(variableName: string, val: Vector3): void;
    uniformIntVector3(variableName: string, val: Vector3): void;
    uniformVector3Array(variableName: string, val: number[] | Float32Array): void;
    uniformColor3(variableName: string, val: Color3): void;
    uniformVector4(variableName: string, val: Vector4): void;
    uniformIntVector4(variableName: string, val: Vector4): void;
    uniformVector4Array(variableName: string, val: number[] | Float32Array): void;
    uniformColor4(variableName: string, val: Color4): void;
    uniformTexture2D(variableName: string, val: Texture2D): void;
    onUse(): void;
    private _pass(variableName, act);
    private _passAsArray(variableName, index, act);
}
