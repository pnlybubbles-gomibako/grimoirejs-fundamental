import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IRenderRendererMessage from "../../Messages/IRenderRendererMessage";
import CameraComponent from "../CameraComponent";
import SingleBufferRenderStageBase from "./SingleBufferRenderStageBase";
export default class RenderSceneComponent extends SingleBufferRenderStageBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    layer: string;
    camera: CameraComponent;
    technique: string;
    private _gl;
    $awake(): void;
    $mount(): void;
    $render(args: IRenderRendererMessage): void;
}
