import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ViewportMouseEvent from "../../Objects/ViewportMouseEvent";
export default class RenderStageBase extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    rendererDescription: {
        [key: string]: any;
    };
    metadata: {
        [key: string]: any;
    };
    $mousemove(v: ViewportMouseEvent): void;
    $mouseenter(v: ViewportMouseEvent): void;
    $mouseleave(v: ViewportMouseEvent): void;
    $mousedown(v: ViewportMouseEvent): void;
    $mouseup(v: ViewportMouseEvent): void;
    protected __beforeRender(): boolean;
    private _assignMouseState(v);
    private _isLeftButtonPressed(v);
    private _isRightButtonPressed(v);
}
