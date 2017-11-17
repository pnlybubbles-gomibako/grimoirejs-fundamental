import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Geometry from "../Geometry/Geometry";
import IRenderable from "../SceneRenderer/IRenderable";
import IRenderArgument from "../SceneRenderer/IRenderArgument";
import CameraComponent from "./CameraComponent";
/**
 * シーン中に存在するメッシュ一つあたりのレンダリングを司るコンポーネント
 * このメッシュが、対象となるノードの`Transform`や描画に用いる`Camera`、マテリアルなどを考慮して実際のレンダリングを行います。
 */
export default class MeshRenderer extends Component implements IRenderable {
    /**
   * Find scene tag recursively.
   * @param  {GomlNode}       node [the node to searching currently]
   * @return {SceneComponent}      [the scene component found]
   */
    private static _findContainedScene(node);
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    index: number;
    renderArgs: {
        [key: string]: any;
    };
    geometry: Promise<Geometry>;
    geometryInstance: Geometry;
    private indexGroup;
    private layer;
    private drawOffset;
    private drawCount;
    private _materialContainer;
    private _transformComponent;
    private _containedScene;
    private _priortyCalcCache;
    getRenderingPriorty(camera: CameraComponent, technique: string): number;
    $awake(): void;
    $mount(): void;
    $unmount(): void;
    render(args: IRenderArgument): void;
    setRenderableIndex(index: number): void;
}
