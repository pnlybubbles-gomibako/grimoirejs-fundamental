import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Timer from "../Util/Timer";
/**
 * 全レンダラーを管理するためのコンポーネント
 */
export default class RendererManagerComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private static _sortImportedFromHTML;
    gl: WebGLRenderingContext;
    private _bgColor;
    private _clearDepth;
    $awake(): void;
    $mount(): void;
    $treeInitialized(): void;
    onloop(timer: Timer): void;
    private _importSortFromHTML();
}
