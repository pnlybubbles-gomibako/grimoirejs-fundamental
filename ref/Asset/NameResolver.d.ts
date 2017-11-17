/**
 * Provide abstraction of resolving named resource such as Geometry, Materials.
 */
export default class NameResolver<T> {
    static UNLOADED: number;
    static RESOLVING: number;
    static RESOLVED: number;
    /**
     * Resolved items
     */
    private _resolved;
    /**
     * Name to Resource-resolvers
     */
    private _resolvers;
    /**
     * Name to waiting resolvers
     */
    private _handlers;
    /**
     * Obtain the named resource.
     * @return {Promise<T>} the resource
     */
    get(name: string): Promise<T>;
    /**
     * Get status of specified resource.
     * This method would return NameResolver.UNLOADED,NameResolver.RESOLVED or NameResolver.RESOLVING
     * @param  {string} name resource name to check status
     * @return {number}      status code
     */
    getStatus(name: string): number;
    /**
     * Register named resource
     * @param  {string}     name      name of the resource
     * @param  {Promise<T>} generator Promise to resolve the resource
     * @return {Promise<T>} The promise of resource
     */
    register(name: string, generator: Promise<T> | T): Promise<T>;
    /**
     * Get promise to wait the named resource registered.
     * @param  {string}     name name of the resource
     * @return {Promise<T>}     Promise to wait for registering
     */
    private _waitForResolved(name);
    /**
     * Call handler to notify the named resource was loaded.
     * @param {string} name      name of the resource
     * @param {T}      resolved Promise to wait for registering
     */
    private _callHandlers(name, resolved);
    private _isPromise(generator);
}
