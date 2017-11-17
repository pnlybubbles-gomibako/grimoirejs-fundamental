import Geometry from "../Geometry/Geometry";
export default class ShaderMixer {
    /**
     * Generate shader code from specified macro and codes.
     * @param  {number}  type   WebGLRenderingContext.VERTEX_SHADER or WebGLRenderingContext.FRAGMENT_SHADER
     * @param   macros macro hash to be included
     * @param  {string}  code   shader body(Raw glsl)
     * @return {string}         generated shader code
     */
    static generate(type: number, macros: {
        [key: string]: string;
    }, code: string, geometry: Geometry): string;
    private static _macroCode(macros);
    private static _geometryToAttributeUsedFlags(geometry);
    private static _precisionCode(gl);
    private static _precisionChunk(prec, typeName, isFloat);
    private static _precisionForVariable(prec, name, isFloat);
}
