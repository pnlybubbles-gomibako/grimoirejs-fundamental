import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import TextureUpdatorComponentBase from "./TextureUpdatorComponentBase";
export default class ColorBufferTextureUpdator extends TextureUpdatorComponentBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    $awake(): void;
    resize(width: number, height: number): void;
}
