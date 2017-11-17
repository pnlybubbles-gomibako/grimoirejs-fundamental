export default class CommentRemover {
    source: string;
    removedSource: string;
    private _status;
    private _afterSlush;
    private readonly _isInComment;
    static remove(source: string): string;
    constructor(source: string);
    private _remove();
    private _defaultParsing(current, next);
    private _checkCommentEnd(last, current);
}
