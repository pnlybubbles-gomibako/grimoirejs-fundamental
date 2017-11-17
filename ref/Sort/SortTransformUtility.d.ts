import IMacro from "../Material/Schema/IMacro";
import IState from "../Material/Schema/IState";
import IVariableInfo from "../Material/Schema/IVariableInfo";
export default class SortTransformUtility {
    /**
     * Separate .sort shader text with @Technique statements.
     * @param  {string} uncommentedSource [description]
     * @return {[type]}                   [description]
     */
    static separateTechniqueSource(uncommentedSource: string): {
        [key: string]: string;
    };
    /**
     * Separate technique source with @Pass statement.
     * @param  {string}   uncommentedSource [description]
     * @return {string[]}                   [description]
     */
    static separatePassSource(uncommentedSource: string): string[];
    /**
     * Fetch draw order preference from technique source.
     * @param  {string} uncommentedTechniqueSource [description]
     * @return {string}                            [description]
     */
    static fetchDrawOrder(uncommentedTechniqueSource: string): string;
    static removePreferences(source: string): string;
    static resolveImports(uncommentedSource: string): Promise<string>;
    static parseMacros(source: string): {
        [key: string]: IMacro;
    };
    static parsePreferences(source: string): IState;
    static asValidJSON(json: string): string;
    static removeComment(source: string): string;
    static obtainNextSection(source: string, begin: string, end: string, offset: number): string;
    static generateVariableFetchRegex(variableType: string): RegExp;
    static parseVariables(source: string, variableType: string): {
        [key: string]: IVariableInfo;
    };
}
