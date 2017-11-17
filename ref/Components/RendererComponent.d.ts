import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import CanvasRegionRenderingTarget from "../Resource/RenderingTarget/CanvasRegionRenderingTarget";
import Viewport from "../Resource/Viewport";
import Timer from "../Util/Timer";
import CameraComponent from "./CameraComponent";
export default class RendererComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    camera: CameraComponent;
    renderingTarget: CanvasRegionRenderingTarget;
    readonly viewport: Viewport;
    private _gl;
    private _canvas;
    private _viewportSizeGenerator;
    private _viewportCache;
    private _mouseLeaveHandler;
    private _mouseEnterHandler;
    private _mouseMoveHandler;
    private _mouseDownHandler;
    private _mouseUpHandler;
    private _wasInside;
    $awake(): void;
    $mount(): void;
    $unmount(): void;
    $treeInitialized(): void;
    $resizeCanvas(): void;
    $renderViewport(args: {
        timer: Timer;
    }): void;
    private _initializeMouseHandlers();
    private _enableMouseHandling();
    private _disableMouseHandling();
    private _sendMouseEvent(eventName, e);
    /**
     * Check mouse is inside of viewport
     * @param  {MouseEvent} e [description]
     * @return {boolean}      [description]
     */
    private _isViewportInside(e);
    /**
     * Obtain mouse point of relative coordinate from element.
     * @param  {MouseEvent} e [description]
     * @return {number[]}     [description] x,y,width,height
     */
    private _getRelativePosition(e);
    /**
     * Convert mouse args into viewport mouse event
     * @param  {MouseEvent}         e [description]
     * @return {ViewportMouseEvent}   [description]
     */
    private _toViewportMouseArgs(e);
}
