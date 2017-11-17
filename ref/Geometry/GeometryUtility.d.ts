export default class GeometryUtility {
    static linesFromTriangles(indices: number[]): number[];
    static plane(center: number[], normal: number[], up: number[], right: number[], hdiv?: number, vdiv?: number, reverse?: boolean): number[];
    static cylinderPlane(center: number[], normal: number[], up: number[], right: number[], divide: number, order: number): number[];
    static triangle(center: number[], normal: number[], up: number[], right: number[]): number[];
    static coneTriangle(center: number[], normal: number[], up: number[], right: number[], divide: number, order: number): number[];
    static triangleIndex(offset: number): any[];
    static planeIndex(offset?: number, hdiv?: number, vdiv?: number): number[];
    static circle(center: number[], normal: number[], up: number[], right: number[], divide?: number): number[];
    static circleIndex(offset: number, divide: number): number[];
    static capsule(center: number[], up: number[], right: number[], forward: number[], vdiv?: number, hdiv?: number): number[];
    static sphere(center: number[], up: number[], right: number[], forward: number[], vdiv: number, hdiv: number): number[];
    static sphereIndex(offset: number, vdiv: number, hdiv: number): number[];
}
