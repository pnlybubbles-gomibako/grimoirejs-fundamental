import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IRenderRendererMessage from "../../Messages/IRenderRendererMessage";
import SingleBufferRenderStageBase from "./SingleBufferRenderStageBase";
export default class RenderQuadComponent extends SingleBufferRenderStageBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    technique: string;
    private indexGroup;
    private _gl;
    private _geom;
    private _materialContainer;
    $awake(): void;
    $mount(): Promise<void>;
    $render(args: IRenderRendererMessage): void;
}
