export default class Timer {
    timeScale: number;
    fpsRestriction: number;
    private _time;
    private _lastRealTime;
    private _unrestrictedLastRealTime;
    private _accumlatedSkipFrame;
    private _deltaTime;
    private _frameCount;
    private _lastFPS;
    readonly deltaTime: number;
    readonly time: number;
    readonly timeInSecound: number;
    readonly frameCount: number;
    readonly FPS: string | number;
    /**
     * Do not call this method manually.
     * This method is only use for internal procedure in framework.
     * @return {[type]} [description]
     */
    internalUpdate(): boolean;
    private _shouldUpdate(time);
    private _updateTimer(time);
}
