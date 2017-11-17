import CacheResolver from "../Asset/CacheResolver";
export declare class ImportResolver extends CacheResolver<string> {
    staticImports: {
        [key: string]: string;
    };
    private static _toAbsolute(href);
    constructor();
    resolve(path: string): Promise<string>;
    private _resolve(path);
    private _fromExternal(path);
}
declare const _default: ImportResolver;
export default _default;
