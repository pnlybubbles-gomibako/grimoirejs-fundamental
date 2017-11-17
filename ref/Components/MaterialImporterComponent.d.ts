import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
/**
 * マテリアル設定ファイルを読み込むためのコンポーネント
 */
export default class MaterialImporterComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    $awake(): void;
}
