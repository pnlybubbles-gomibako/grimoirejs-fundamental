import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Material from "../Material/Material";
import MaterialContainerBase from "./MaterialContainerBase";
export default class MaterialComponent extends MaterialContainerBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    materialPromise: Promise<Material>;
    material: Material;
    ready: boolean;
    materialArgs: {
        [key: string]: any;
    };
    $mount(): void;
    private _registerAttributes();
}
