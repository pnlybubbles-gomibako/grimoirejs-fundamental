import IMaterialArgument from "./IMaterialArgument";
import ITechniqueRecipe from "./Schema/ITechniqueRecipe";
import Technique from "./Technique";
/**
 * Provides abstraction of configurations for multiple shaders.
 */
export default class Material {
    gl: WebGLRenderingContext;
    techniqueRecipes: {
        [key: string]: ITechniqueRecipe;
    };
    techniques: {
        [key: string]: Technique;
    };
    constructor(gl: WebGLRenderingContext, techniqueRecipes: {
        [key: string]: ITechniqueRecipe;
    });
    draw(arg: IMaterialArgument): void;
    /**
     * Clone this material to new instance.
     * @return {Material} new material instance
     */
    clone(): Material;
}
