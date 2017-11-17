export declare type TypedArrayConstructor = (new (length: number) => ArrayBufferView) & (new (array: ArrayLike<number>) => ArrayBufferView) & (new (buffer: ArrayBufferLike, byteOffset?: number, length?: number) => ArrayBufferView);
/**
 * Provides misc features for WebGL.
 * Typically not limited to specific context.
 */
export default class GLUtility {
    /**
     * Obtain typed array constructor from GL type.
     * @param type
     */
    static typeToTypedArrayConstructor(type: number): TypedArrayConstructor;
    /**
     * Obtain GL type from typed array buffer view.
     * @param buffer
     */
    static arrayBufferToElementType(buffer: ArrayBufferView): number;
    /**
     *
     * @param format
     */
    static formatToElementCount(format: number): number;
}
