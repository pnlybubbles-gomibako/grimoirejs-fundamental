import ExternalResourceResolver from "./ExternalResourceResolver";
export declare class TextFileResolver extends ExternalResourceResolver<string> {
    resolve(path: string): Promise<string>;
    private _dataUriToText(dataUrl);
}
declare const _default: TextFileResolver;
export default _default;
