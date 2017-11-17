import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Material from "../Material/Material";
import BasicComponent from "./BasicComponent";
/**
 * Base class for container component for material and material arguments.
 * Basically used for MaterialComponent and MaterialContainerComponent
 */
export default class MaterialContainerBase extends BasicComponent {
    protected _lastParameters: {
        [key: string]: IAttributeDeclaration & {
            __lastValue?: any;
        };
    };
    /**
     * Expose sepcified parameters as attribute parameters on this component
     * @param {Material} material [description]
     */
    protected __exposeMaterialParameters(material: Material, keepVariable?: boolean): void;
    protected __removeExposedMaterialParameters(): void;
}
