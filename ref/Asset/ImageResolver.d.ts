import ExternalResourceResolver from "./ExternalResourceResolver";
export declare class ImageResolver extends ExternalResourceResolver<HTMLImageElement> {
    static defaultCORSConfig: string;
    /**
     * Cors config resolvers.
     * If all of resolvers returns null, defaultCORSConfig will be used.
     */
    static corsResolvers: ((path: string) => string)[];
    resolve(path: string): Promise<HTMLImageElement>;
    private _getCORSConfig(path);
}
declare const _default: ImageResolver;
export default _default;
