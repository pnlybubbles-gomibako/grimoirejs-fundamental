import Geometry from "./Geometry";
import MorphParameter from "./MorphParameter";
/**
 * Geometries with morphing features
 */
export default class MorphGeometry extends Geometry {
    private _morphBaseAttribute;
    morphParameters: {
        [semantics: string]: MorphParameter[];
    };
    lastWeights: number[];
    addMorphAttribute(semantics: string, morphParameters: MorphParameter[]): void;
    removeMorphAttribute(semantics: string): void;
    setWeight(weights: number[]): void;
    private _updateForSemantics(semantics);
    private _calculateWeights(semantics, index);
}
