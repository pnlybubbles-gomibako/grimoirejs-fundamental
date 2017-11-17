import ITechniqueRecipe from "../Material/Schema/ITechniqueRecipe";
declare class SortParser {
    /**
     * Cache to prevent double loading
     */
    private static _parsedCache;
    static parse(source: string): Promise<{
        [key: string]: ITechniqueRecipe;
    }>;
    private static _parse(source);
    private static _parseTechnique(techniqueSource);
    private static _parsePassSource(passSource);
}
export default SortParser;
