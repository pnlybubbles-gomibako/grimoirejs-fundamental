import IRenderable from "./IRenderable";
import RenderQueue from "./RenderQueue";
export default class RenderQueueRegistry {
    private _queues;
    private _renderables;
    registerQueue(queue: RenderQueue): void;
    unregisterQueue(queue: RenderQueue): void;
    addRenderable(rendarable: IRenderable): void;
    removeRenderable(renderable: IRenderable): void;
    getByIndex(index: number): IRenderable;
}
