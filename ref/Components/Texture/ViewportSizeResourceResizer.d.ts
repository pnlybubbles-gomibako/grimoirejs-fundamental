import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IResizeViewportMessage from "../../Messages/IResizeViewportMessage";
import ResourceResizerComponentBase from "./ResourceResizerComponentBase";
/**
 * Resource resizer that resizes all of ResizableResourceUpdator bounded to this node.
 * This resource resizer will resize these by considering viewport size.
 */
export default class ViewportSizeResourceResizer extends ResourceResizerComponentBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    $mount(): void;
    $resizeViewport(arg: IResizeViewportMessage): void;
}
