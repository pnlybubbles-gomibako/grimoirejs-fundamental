import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IRenderRendererMessage from "../../Messages/IRenderRendererMessage";
import IResizeViewportMessage from "../../Messages/IResizeViewportMessage";
import ViewportMouseEvent from "../../Objects/ViewportMouseEvent";
import Framebuffer from "../../Resource/FrameBuffer";
import RenderBuffer from "../../Resource/RenderBuffer";
import Texture2D from "../../Resource/Texture2D";
import SingleBufferRenderStageBase from "./SingleBufferRenderStageBase";
export default class RenderHitareaComponent extends SingleBufferRenderStageBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    hitareaTexture: Texture2D;
    hitareaRenderbuffer: RenderBuffer;
    hitareaFBO: Framebuffer;
    private _sceneRenderer;
    private _gl;
    private _canvas;
    private _lastPosition;
    private _mouseInside;
    private _readCache;
    private _bufferViewport;
    private _lastRenderable;
    private _mouseMoved;
    $mount(): void;
    $resizeViewport(args: IResizeViewportMessage): void;
    $render(args: IRenderRendererMessage): void;
    $mousemove(v: ViewportMouseEvent): void;
    $mouseenter(v: ViewportMouseEvent): void;
    $mouseleave(v: ViewportMouseEvent): void;
    /**
     * Update current mesh index. Emit events if need.
     * @param index
     * @param camera
     */
    private _updateCurrentIndex(index, camera);
}
