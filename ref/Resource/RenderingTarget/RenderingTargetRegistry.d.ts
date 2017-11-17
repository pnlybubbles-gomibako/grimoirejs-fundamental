import GLRelatedRegistryBase from "../GLRelatedRegistryBase";
import IRenderingTarget from "./IRenderingTarget";
/**
 * RenderingTargetRegistry is container class of rendering target.
 * Rendering target consists of 2 types.
 * Offscreen rendering target is used for rendering into non screen buffer(Texture)
 * Default rendering target is used for rendering into screen.
 */
export default class RenderingTargetRegistry extends GLRelatedRegistryBase {
    gl: WebGLRenderingContext;
    static registryName: string;
    /**
     * Obtain reference of the class by WebGLRenderingContext.
     * @param gl
     */
    static get(gl: WebGLRenderingContext): RenderingTargetRegistry;
    private _renderingTargets;
    private _renderingTargetResolver;
    constructor(gl: WebGLRenderingContext);
    /**
     * Register a rendering target to be resolved
     * @param name
     * @param renderingTarget
     */
    setRenderingTarget(name: string, renderingTarget: IRenderingTarget): void;
    /**
     * Obtain a rendering taregt from name.
     */
    getRenderingTarget(name: string): Promise<IRenderingTarget>;
    /**
     * List of names being resolved aleady
     */
    readonly targetNames: string[];
    private _waitForRenderingTarget(name);
    private _resolveRenderingTargets(name, target);
}
