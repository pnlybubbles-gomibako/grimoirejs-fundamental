import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Geometry from "../Geometry/Geometry";
/**
 * ジオメトリを管理するコンポーネント
 * あまりユーザーが直接操作することはありません。
 */
export default class GeometryRegistoryComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private _geometryResolver;
    $awake(): void;
    addGeometry(name: string, geometry: Promise<Geometry> | Geometry): void;
    getGeometry(name: string): Promise<Geometry>;
}
