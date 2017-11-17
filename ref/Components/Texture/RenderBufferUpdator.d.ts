import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import RenderBuffer from "../../Resource/RenderBuffer";
import ResizableResourceUpdator from "./ResizableResourceUpdator";
export default class RenderBufferComponent extends ResizableResourceUpdator {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    buffer: RenderBuffer;
    $awake(): void;
    $unmount(): void;
    resize(width: number, height: number): void;
}
