import UniformProxy from "../Resource/UniformProxy";
import IMaterialArgument from "./IMaterialArgument";
import Material from "./Material";
import Pass from "./Pass";
import PassProgram from "./PassProgram";
import IPassRecipe from "./Schema/IPassRecipe";
import IVariableInfo from "./Schema/IVariableInfo";
import Technique from "./Technique";
import UniformResolverContainer from "./UniformResolverContainer";
export declare type IUniformRegisterOnRegister = (proxy: UniformProxy, args: IMaterialArgument) => void;
export declare type IUniformRegisterOnDispose = () => void;
export declare type IUniformRegisterOnUpdate = (passProgram: PassProgram, newValue: any, oldValue: any) => void;
export declare type IUniformRegisterer = (variableInfo: IVariableInfo, pass: Pass, technique: Technique, material: Material) => IUniformRegisterOnRegister | {
    register: IUniformRegisterOnRegister;
    dispose?: IUniformRegisterOnDispose;
    update?: IUniformRegisterOnUpdate;
};
export declare class UniformResolverRegistry {
    private _generators;
    add(semantic: string, generator: IUniformRegisterer): void;
    generateRegisterers(pass: Pass, passInfo: IPassRecipe): UniformResolverContainer;
}
declare const _default: UniformResolverRegistry;
export default _default;
