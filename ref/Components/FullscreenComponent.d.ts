import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
/**
 * フルスクリーン状態を管理するコンポーネント
 * Grimoire.jsによって管理されているキャンバス(正確にはその親のコンテナ)のフルスクリーン状態等を管理します。
 * (他の要素をフルスクリーン化することも可能ですが、通常このGrimoire.jsによって生成されるキャンバスを含むDOM要素に対して用いられます。)
 * また、一部の古いブラウザでは動作しない機能であることに注意してください。
 * また、`fullscreen`属性は必ず マウスのイベントなどのユーザーのインタラクションを伴うイベントからの呼び出しで **動的に** trueにされる必要があります。
 * 最初からtrueに設定して初期状態でキャンバスをフルスクリーン状態にすることはWebAPIの制約上できません。
 */
export default class FullscreenComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private _fullscreen;
    $awake(): void;
    private _switchFullscreen();
    private requestFullscreen(target);
    private exitFullscreen();
}
