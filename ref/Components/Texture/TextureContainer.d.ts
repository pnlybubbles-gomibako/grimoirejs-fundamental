import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Texture2D from "../../Resource/Texture2D";
export default class TextureContainer extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    texture: Texture2D;
    $mount(): void;
    $unmount(): void;
}
