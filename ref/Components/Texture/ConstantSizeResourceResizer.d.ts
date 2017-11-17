import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ResourceResizerComponentBase from "./ResourceResizerComponentBase";
/**
 * Resource resizer that resizes all of ResizableResourceUpdator bounded to this node.
 * This resource resizer will resize by given resolution attribute.
 */
export default class ConstantSizeResourceResizer extends ResourceResizerComponentBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    $mount(): void;
}
