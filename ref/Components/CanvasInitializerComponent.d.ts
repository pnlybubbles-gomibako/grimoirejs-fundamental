import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
/**
 * キャンバスの初期化及び設定を司るコンポーネント
 * このコンポーネントによって、適切な位置に`<canvas>`を初期化してWebGLコンテキストを初期化します。
 */
export default class CanvasInitializerComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    /**
     * The canvas managed by this component
     * @type {HTMLCanvasElement}
     */
    canvas: HTMLCanvasElement;
    private _scriptTag;
    private _canvasContainer;
    private _widthMode;
    private _heightMode;
    private _ratio;
    $awake(): void;
    notifySizeChanged(): void;
    /**
     * Generate canvas element
     * @param  {Element}           parent [description]
     * @return {HTMLCanvasElement}        [description]
     */
    private _generateCanvas(scriptTag);
    private _resize(supressBroadcast?);
    private _onWindowResize(supressBroadcast?);
    private _applyManualWidth(width, supressBroadcast?);
    private _applyManualHeight(height, supressBroadcast?);
    private _getParentSize();
    /**
     * Get resize mode from raw attribute of height or width
     * @param  {string  | number}      mode [description]
     * @return {ResizeMode}   [description]
     */
    private _asResizeMode(cso);
    private _configureCanvas(canvas, scriptTag);
    private _getContext(canvas);
    /**
     * Insert __id__property to be identify rendering contexts
     */
    private _applyContextId(context);
    /**
     * Check the tag is included in the body
     * @param  {Element} tag [description]
     * @return {boolean}     [description]
     */
    private _isContainedInBody(tag);
    private _autoFixForBody(scriptTag);
}
