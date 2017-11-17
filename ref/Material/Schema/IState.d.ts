import IDynamicState from "./IDynamicState";
interface IState {
    enable: number[];
    disable?: number[];
    functions: {
        blendColor?: number[];
        blendEquationSeparate?: number[];
        blendFuncSeparate?: number[];
        colorMask?: boolean[];
        cullFace?: number[];
        depthFunc?: number[];
        depthMask?: boolean[];
        depthRange?: number[];
        frontFace?: number[];
        lineWidth?: number[];
        polygonOffset?: number[];
        scissor?: number[];
    };
    dynamicState?: IDynamicState[];
}
export default IState;
