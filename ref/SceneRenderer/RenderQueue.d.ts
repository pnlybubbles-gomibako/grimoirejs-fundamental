import IRenderable from "./IRenderable";
import IRenderArgument from "./IRenderArgument";
export default class RenderQueue {
    private _sortedRenderablesByTechniques;
    private _rendeables;
    add(rendarable: IRenderable): void;
    remove(rendarable: IRenderable): void;
    renderAll(args: IRenderArgument): void;
    private _sortForTechnique(args, technique);
    private _ensureCacheForTechnique(technique);
    private _removeFromRenderables(renderable, source);
}
