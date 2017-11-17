import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Geometry from "../Geometry/Geometry";
/**
 * ジオメトリを生成するためのコンポーネント
 * `type`属性に指定されたタイプのジオメトリを生成して、`name`属性に指定された名前で利用できる形にして登録します。
 * このコンポーネントは`type`属性に応じて、**動的** に属性が増えることに気をつけてください。
 */
export default class GeometryComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    geometry: Geometry;
    $mount(): Promise<void>;
}
