/**
 * Resolve resources with caching.
 */
export default class CacheResolver<T> {
    toAbsolute: (relative: string) => string;
    cache: {
        [key: string]: T;
    };
    resolvers: {
        [key: string]: Promise<T>;
    };
    constructor(toAbsolute: (relative: string) => string);
    resolve(src: string, resolver: (abs: string) => Promise<T>): Promise<T>;
    private _cached(abs);
    private _resolving(abs);
    private _resolved(abs, result);
}
