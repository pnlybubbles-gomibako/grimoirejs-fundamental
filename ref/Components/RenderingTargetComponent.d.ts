import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import OffscreenRenderingTarget from "../Resource/RenderingTarget/OffscreenRenderingTarget";
/**
 * Register specified buffer to rendering target.
 * If there were no child buffer node, this component will instanciate default buffers.
 */
export default class RenderingTargetComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    renderingTarget: OffscreenRenderingTarget;
    $mount(): void;
    /**
     * Generate default buffers as children node
     * @param name
     */
    private _instanciateDefaultBuffers(name);
}
