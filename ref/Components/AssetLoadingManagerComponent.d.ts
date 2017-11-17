import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import AssetLoader from "../Asset/AssetLoader";
/**
 * アセットの読み込みを司るコンポーネント。ローダーの表示などを司る。
 */
export default class AssetLoadingManagerComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    loader: AssetLoader;
    private _documentResolver;
    private _loaderElement;
    $treeInitialized(): void;
    $awake(): void;
    private _autoStart();
}
