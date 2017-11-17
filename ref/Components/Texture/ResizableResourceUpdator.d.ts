import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import BasicComponent from "../BasicComponent";
import ResourceResizerComponent from "./ResourceResizerComponentBase";
/**
 * Abstract class of ResizableResource container.
 */
export default class ResizableResourceUpdator extends BasicComponent {
    static resizers: {
        [key: string]: typeof ResourceResizerComponent;
    };
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    /**
     * Resize texture buffer
     * @param width
     * @param height
     */
    resize(width: number, height: number): void;
    $awake(): void;
}
