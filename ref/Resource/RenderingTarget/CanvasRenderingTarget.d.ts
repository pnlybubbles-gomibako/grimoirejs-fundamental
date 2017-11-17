import Viewport from "../Viewport";
import IRenderingTarget from "./IRenderingTarget";
/**
 * Rendering target to render into canvas
 */
export default class CanvasRenderingTarget implements IRenderingTarget {
    gl: WebGLRenderingContext;
    beforeDraw(clearFlag: number, color: number[], depth: number): void;
    /**
     * Actual buffer width of rendered buffer.
     * This value can't be changed by viewport.
     * Just depending on canvas size.
     */
    getBufferWidth(): number;
    /**
     * Actual buffer height of rendered buffer.
     * This value can't be changed by viewport.
     * Just depending on canvas size.
     */
    getBufferHeight(): number;
    getViewport(): Viewport;
    protected __configureClearScissor(): void;
    constructor(gl: WebGLRenderingContext);
}
