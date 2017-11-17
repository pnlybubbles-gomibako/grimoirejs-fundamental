import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Timer from "../Util/Timer";
/**
 * 全体のループを管理しているコンポーネント。あまり直接ユーザーがいじることはありません。
 */
export default class LoopManagerComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private _loopActions;
    private _registerNextLoop;
    private _timer;
    $awake(): void;
    $mount(): void;
    register(action: (timer: Timer) => void, priorty: number): void;
    private _begin();
    private _loop();
}
