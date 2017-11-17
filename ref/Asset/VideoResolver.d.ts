/**
 * VideoResolver provides abstraction of loading feature for video element.
 * Despite the other resolvers, VideoResolver doesn't extends ExternalResourceResolver since
 * that element contains frame operation also and it affects frame control in each function of grimoire using.
 * @param  {string}                    path [description]
 * @return {Promise<HTMLVideoElement>}      [description]
 */
export declare class VideoResolver {
    static defaultCORSConfig: string;
    /**
     * Cors config resolvers.
     * If all of resolvers returns null, defaultCORSConfig will be used.
     */
    static corsResolvers: ((path: string) => string)[];
    resolve(path: string): Promise<HTMLVideoElement>;
    private _getCORSConfig(path);
}
declare const _default: VideoResolver;
export default _default;
