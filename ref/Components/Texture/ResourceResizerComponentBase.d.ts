import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
/**
 * Base class of texture resizer
 */
export default class TextureResizerComponentBase extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private _lastWidth;
    private _lastHeight;
    /**
     * Resize all resources on this node.
     * @param width
     * @param height
     */
    protected __resizeResources(width: number, height: number): void;
}
