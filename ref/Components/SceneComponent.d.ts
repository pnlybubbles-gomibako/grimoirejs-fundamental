import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import RenderQueueRegistry from "../SceneRenderer/RenderQueueRegistry";
import Timer from "../Util/Timer";
/**
 * 特定のシーン内に関連する処理を行うためのコンポーネント
 * このコンポーネントには属性が存在しません。
 */
export default class SceneComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    sceneDescription: {
        [key: string]: any;
    };
    queueRegistory: RenderQueueRegistry;
    /**
     * The index of loop executed last time.
     * @type {number}
     */
    private _lastUpdateIndex;
    private static _sceneDescriptionCreationHandlers;
    static onSceneDescriptionCreation(handler: (sd: {
        [key: string]: any;
    }, scene: SceneComponent) => void): void;
    $mount(): void;
    /**
     * Notify update scene only when send update message is needed.
     * @param {Timer} timer [description]
     */
    updateScene(timer: Timer): void;
}
