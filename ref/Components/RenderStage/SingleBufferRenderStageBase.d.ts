import Color4 from "grimoirejs-math/ref/Color4";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IRenderingTarget from "../../Resource/RenderingTarget/IRenderingTarget";
import RenderStageBase from "./RenderStageBase";
export default class SingleBufferRenderStageBase extends RenderStageBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    clearColor: Color4;
    clearColorEnabled: boolean;
    clearDepth: number;
    clearDepthEnabled: boolean;
    _out: Promise<IRenderingTarget>;
    out: IRenderingTarget;
    $awake(): void;
    /**
     * Setup rendering target(Attaching FBO, clearning depth or color buffers)
     */
    protected __beforeRender(): boolean;
}
