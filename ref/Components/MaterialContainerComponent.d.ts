import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Material from "../Material/Material";
import MaterialContainerBase from "./MaterialContainerBase";
/**
 * マテリアルとマテリアルへの属性を管理するためのコンポーネント
 * このコンポーネントは将来的に`MeshRenderer`と統合されます。
 * 指定されたマテリアルの初期化の管理や、マテリアルによって動的に追加される属性の管理を行います、
 */
export default class MaterialContainerComponent extends MaterialContainerBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    static rewriteDefaultMaterial(materialName: string): void;
    static readonly defaultMaterial: string;
    private static _defaultMaterial;
    getDrawPriorty(depth: number, technique: string): number;
    material: Material;
    materialArgs: {
        [key: string]: any;
    };
    materialReady: boolean;
    useMaterial: boolean;
    private _materialComponent;
    private _drawOrder;
    private _registeredAttributes;
    private _transparent;
    $mount(): void;
    /**
     * When the material attribute is changed.
     */
    private _onMaterialChanged();
    /**
     * Resolve materials only when the material required from external material component.
     * @return {Promise<void>} [description]
     */
    private _prepareExternalMaterial(materialPromise);
    private _prepareInternalMaterial(materialPromise);
}
