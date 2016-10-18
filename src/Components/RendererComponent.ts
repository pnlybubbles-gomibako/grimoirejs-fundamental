import IBufferUpdatedMessage from "../Messages/IBufferUpdatedMessage";
import IResizeBufferMessage from "../Messages/IResizeBufferMessage";
import IRenderRendererMessage from "../Messages/IRenderRendererMessage";
import Texture2D from "../Resource/Texture2D";
import CameraComponent from "./CameraComponent";
import Component from "grimoirejs/lib/Node/Component";
import IAttributeDeclaration from "grimoirejs/lib/Node/IAttributeDeclaration";
import {Rectangle} from "grimoirejs-math";

export default class RendererComponent extends Component {
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    camera: {
      converter: "Component",
      defaultValue: "camera",
      target: "Camera"
    },
    viewport: {
      converter: "Viewport",
      defaultValue: "auto"
    }
  };

  private _camera: CameraComponent;

  private _gl: WebGLRenderingContext;

  private _canvas: HTMLCanvasElement;

  private _viewportSizeGenerator: (canvas: HTMLCanvasElement) => Rectangle;

  private _viewportCache: Rectangle;

  private _buffers: { [key: string]: Texture2D } = {};

  public $mount(): void {
    this._gl = this.companion.get("gl") as WebGLRenderingContext;
    this._canvas = this.companion.get("canvasElement") as HTMLCanvasElement;
    this._camera = this.getValue("camera");
    this.getAttribute("camera").addObserver((v) => this._camera = v.Value);
    this.getAttribute("viewport").addObserver((v) => {
      this._viewportSizeGenerator = v.Value;
      this.$resizeCanvas();
    });
    this._viewportSizeGenerator = this.getValue("viewport");
  }

  public $treeInitialized(): void {
    // This should be called after mounting all of tree nodes in children
    this.$resizeCanvas();
  }

  public $resizeCanvas(): void {
    this._viewportCache = this._viewportSizeGenerator(this._canvas);
    const newSizes = this._getSizePowerOf2(this._viewportCache.Width, this._viewportCache.Height);
    if (this.node.children.length === 0) {
      this.node.addNode("render-scene", {});
    }
    this.node.broadcastMessage("resizeBuffer", <IResizeBufferMessage>{ // TODO apply when viewport was changed
      width: newSizes.width,
      height: newSizes.height,
      buffers: this._buffers
    });
    this.node.broadcastMessage("bufferUpdated", <IBufferUpdatedMessage>{
      buffers: this._buffers
    });
  }

  public $renderViewport(args: { loopIndex: number }): void {
    this.node.broadcastMessage("render", <IRenderRendererMessage>{
      camera: this._camera,
      viewport: this._viewportCache,
      buffers: this._buffers,
      loopIndex: args.loopIndex
    });
  }

  // There should be more effective way to resize texture
  private _getSizePowerOf2(width: number, height: number): { width: number, height: number } {
    const nw = Math.pow(2, Math.log(width) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
    const nh = Math.pow(2, Math.log(height) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
    return {
      width: nw,
      height: nh
    };
  }

}
