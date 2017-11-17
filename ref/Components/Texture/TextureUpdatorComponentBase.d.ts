import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Texture2D from "../../Resource/Texture2D";
import ResizableResourceUpdator from "./ResizableResourceUpdator";
export default class TextureUpdatorComponentBase extends ResizableResourceUpdator {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private textureComponent;
    protected readonly __texture: Texture2D;
    $awake(): void;
}
