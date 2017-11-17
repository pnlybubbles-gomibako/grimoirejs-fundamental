import Viewport from "../Viewport";
import CanvasRenderingTarget from "./CanvasRenderingTarget";
/**
 * Rendering target of part of canvas.
 * This rendering target limit a region of canvas by viewport.
 */
export default class CanvasRegionRenderingTarget extends CanvasRenderingTarget {
    private _viewport;
    constructor(gl: WebGLRenderingContext);
    setViewport(viewport: Viewport): void;
    getViewport(): Viewport;
    protected __configureClearScissor(): void;
}
