import UniformProxy from "../Resource/UniformProxy";
import IMaterialArgument from "./IMaterialArgument";
import PassProgram from "./PassProgram";
import { IUniformRegisterOnDispose, IUniformRegisterOnRegister, IUniformRegisterOnUpdate } from "./UniformResolverRegistry";
/**
 * Container of uniform registerers resolved by UniformResolverRegistry already.
 * @param  {IUniformRegisterOnRegister[]} publicregisterers [description]
 * @param  {IUniformRegisterOnDispose[]}  publicdisposers   [description]
 * @return {[type]}                                         [description]
 */
export default class UniformResolverContainer {
    registerers: IUniformRegisterOnRegister[];
    disposers: IUniformRegisterOnDispose[];
    updators: {
        [variableName: string]: IUniformRegisterOnUpdate;
    };
    constructor(registerers: IUniformRegisterOnRegister[], disposers: IUniformRegisterOnDispose[], updators: {
        [variableName: string]: IUniformRegisterOnUpdate;
    });
    /**
     * Resolve uniform variables to pass gpu
     * @param {UniformProxy}      proxy [description]
     * @param {IMaterialArgument} args  [description]
     */
    resolve(proxy: UniformProxy, args: IMaterialArgument): void;
    /**
     * Dispose all resolvers
     */
    dispose(): void;
    /**
     * Update specified variable
     * @param {string} variableName [description]
     */
    update(passProgram: PassProgram, variableName: string, newValue: any, oldValue: any): void;
}
