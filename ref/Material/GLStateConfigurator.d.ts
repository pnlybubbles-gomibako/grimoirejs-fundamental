import IMaterialArgument from "./IMaterialArgument";
import Pass from "./Pass";
import IDynamicStateResolver from "./Schema/IDynamicStateResolver";
import IPassRecipe from "./Schema/IPassRecipe";
import IState from "./Schema/IState";
export default class GLStateConfigurator {
    private static _glEnableTargets;
    private static _dynamicStateResolvers;
    static registerDynamicStateResolver(key: string, resolver: IDynamicStateResolver): void;
    static getDynamicStateResolver(pass: Pass): (gl: WebGLRenderingContext, mat: IMaterialArgument) => void;
    /**
     * Configure gl state based on pass recipe
     */
    static configureForPass(gl: WebGLRenderingContext, passRecipe: IPassRecipe): void;
    /**
     * Complement disabling state based on enabled states.
     */
    static complementDisableState(state: IState): void;
}
