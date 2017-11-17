import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import TextureUpdatorComponentBase from "./TextureUpdatorComponentBase";
export default class ImageTextureUpdator extends TextureUpdatorComponentBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    flipY: boolean;
    premultipliedAlpha: boolean;
    src: string;
    private _resolvedImage;
    $awake(): void;
    resize(width: number, height: number): void;
    private _loadTask(src);
    private _updateTexture();
}
