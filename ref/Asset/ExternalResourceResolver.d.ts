import CacheResolver from "./CacheResolver";
export default class ExternalResourceResolver<T> extends CacheResolver<T> {
    /**
     * Check specified url is dataUrl or not
     * @param  {string}  dataUrl [description]
     * @return {boolean}         [description]
     */
    static isDataURL(dataUrl: string): boolean;
    /**
     * Make sure that is data URL.
     * @param  {string} href [description]
     * @return {string}      [description]
     */
    private static _toAbsolute(href);
    constructor();
}
