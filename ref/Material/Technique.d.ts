import IMaterialArgument from "./IMaterialArgument";
import Material from "./Material";
import Pass from "./Pass";
import ITechniqueRecipe from "./Schema/ITechniqueRecipe";
/**
 * Technique provides an abstraction of drawing with multiple shaders.
 * Technique represents a draw technique like (basic drawing, normal drawing,low quality drawing and so on)
 * By specifing which technique should be used in a drawing stage, users can easily to switch multiple drawing formulas.
 * @param  {Material}         publicmaterial [description]
 * @param  {ITechniqueRecipe} recipe         [description]
 * @return {[type]}                          [description]
 */
export default class Technique {
    material: Material;
    /**
     * Draw prder priorty of this technique
     */
    drawOrder: string;
    /**
     * Actual drawing stages of this technique
     */
    passes: Pass[];
    constructor(material: Material, recipe: ITechniqueRecipe);
    /**
     * Draw with specified argument by this technique
     * @param {IMaterialArgument} args [description]
     */
    draw(args: IMaterialArgument): void;
    /**
     * Destroy to release resources
     */
    dispose(): void;
}
