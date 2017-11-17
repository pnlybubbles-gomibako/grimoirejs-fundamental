/**
 * Manage macros which would be appended head of all shaders grimoire.js would load.
 */
export default class MacroRegistory {
    /**
     * The map of macro.
     */
    private _macro;
    /**
     * Handlers functions for changing macro.
     */
    private _observers;
    constructor();
    /**
     * Set the value of macros.
     * @param {string}    key [description]
     * @param {string =   null}        val [description]
     */
    setValue(key: string, val?: string): void;
    /**
     * Get the value of macro.
     * @param  {string} key [description]
     * @return {string}     [description]
     */
    getValue(key: string): string;
    watch(macroName: string, handler: (value: string, isImmediateCall: boolean) => void, immediate?: boolean): void;
    unwatch(macroName: string, handler: (value: string, isImmediateCall: boolean) => void): boolean;
    private _notifyMacroChanged(key, value);
}
