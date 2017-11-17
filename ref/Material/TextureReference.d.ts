import Texture2D from "../Resource/Texture2D";
/**
 * Proxy of texture reference
 */
export default class TextureReference {
    rawResource: Texture2D | ((val: {
        [key: string]: Texture2D;
    }) => Texture2D);
    isFunctionalProxy: boolean;
    constructor(rawResource: Texture2D | ((val: {
        [key: string]: Texture2D;
    }) => Texture2D));
    get(): Texture2D;
    get(buffers: {
        [key: string]: Texture2D;
    }): Texture2D;
}
