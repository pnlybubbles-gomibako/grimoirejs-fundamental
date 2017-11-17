import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import TextureUpdatorComponentBase from "./TextureUpdatorComponentBase";
export default class VideoTextureUpdatorComponent extends TextureUpdatorComponentBase {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    flipY: boolean;
    premultipliedAlpha: boolean;
    src: string;
    video: HTMLVideoElement;
    currentTime: number;
    muted: boolean;
    playbackRate: number;
    loop: boolean;
    $awake(): void;
    resize(width: number, height: number): void;
    private _update();
    private tryUpdateCurrentFrame();
    private _loadTask(src);
    private _syncVideoPref();
}
