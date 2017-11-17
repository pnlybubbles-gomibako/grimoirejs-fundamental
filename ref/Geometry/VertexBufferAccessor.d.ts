import BufferAccessor from "./BufferAccessor";
interface VertexBufferAccessor extends BufferAccessor {
    type?: number;
    keepOnBuffer?: boolean;
    normalized?: boolean;
    instancingDivisor?: number;
}
export default VertexBufferAccessor;
