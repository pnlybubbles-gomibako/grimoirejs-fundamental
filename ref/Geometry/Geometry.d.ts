import AABB from "grimoirejs-math/ref/AABB";
import Buffer from "../Resource/Buffer";
import Program from "../Resource/Program";
import IndexBufferInfo from "./IndexBufferInfo";
import VertexBufferAccessor from "./VertexBufferAccessor";
export interface GeometryVertexBufferAccessor extends VertexBufferAccessor {
    bufferIndex: number;
}
/**
 * The geometry class for managing buffer resource
 */
export default class Geometry {
    gl: WebGLRenderingContext;
    private static _lastGeometry;
    /**
     * Hash calculator of accessors map.
     * If this value was same with the other geometry, the 2 geometries have same accessors.
     * 'Same' DOES NOT mean that these geometries have a buffers containing same elements.
     * But, if there was a accessor named 'A' in one of them, the other one should exist.
     */
    readonly accessorHash: number;
    /**
     * Vertex buffer
     * @type {Buffer[]}
     */
    buffers: Buffer[];
    indices: {
        [geometryType: string]: IndexBufferInfo;
    };
    accessors: {
        [semantics: string]: GeometryVertexBufferAccessor;
    };
    aabb: AABB;
    private instanciator;
    private _accessorHashCache;
    /**
     * bind a vertex buffer to specified attribute variable.
     * @param  {Geometry} geometry      [description]
     * @param  {Program}  program       [description]
     * @param  {string}   attributeName [description]
     * @param  {string}   semantics    [description]
     * @return {boolean}                [description]
     */
    static bindBufferToAttribute(geometry: Geometry, program: Program, attributeName: string, semantics: string): boolean;
    static drawWithCurrentVertexBuffer(geometry: Geometry, indexName: string, count?: number, offset?: number): void;
    constructor(gl: WebGLRenderingContext);
    addAttributes(buffer: number[] | BufferSource, accessors: {
        [semantcis: string]: VertexBufferAccessor;
    }, usage?: number): void;
    addAttributes(buffer: number[] | BufferSource | Buffer, accessors: {
        [semantics: string]: VertexBufferAccessor;
    }): void;
    /**
     * add new index buffer to this geometry.
     * @param {string}                       indexName [description]
     * @param {Buffer|number[]|BufferSource} buffer    [description]
     * @param {number                    =         WebGLRenderingContext.TRIANGLES} topology [description]
     * @param {number                    =         0}                               offset   [description]
     * @param {number                    =         null}                            count    [description]
     * @param {number                    =         0}                               type     [description]
     */
    addIndex(indexName: string, instanceCount: number, buffer: Buffer | number[] | BufferSource, topology?: number, offset?: number, count?: number, type?: number): void;
    addIndex(indexName: string, buffer: Buffer | number[] | BufferSource, topology?: number, offset?: number, count?: number, type?: number): void;
    drawByDefault(indexName: string, attribNames: string[], program: Program, count?: number, offset?: number): void;
    clone(): Geometry;
    /**
     * Make sure buffer sources converted into Buffer
     * @param  {Buffer|BufferSource|number[]} buffer [description]
     * @return {Buffer}                              [description]
     */
    private _ensureToBeVertexBuffer(buffer, usage, keepBuffer);
    /**
     * Make sure buffer sources converted into Buffer
     * @param  {Buffer|BufferSource|number[]} buffer [description]
     * @return {Buffer}                              [description]
     */
    private _ensureToBeIndexBuffer(buffer, type);
    private _indexTypeFromCount(count);
    private _indexTypeToArrayConstructor(type);
    private _indexTypeToByteSize(type);
    private _attribTypeToByteSize(type);
    private _recalculateAccsessorHash();
}
