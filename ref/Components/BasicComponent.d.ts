import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Timer from "../Util/Timer";
import AssetLoadingManager from "./AssetLoadingManagerComponent";
import LoopManager from "./LoopManagerComponent";
export default class BasicComponent extends Component {
    static attributes: {
        [name: string]: IAttributeDeclaration;
    };
    private _loopManagerBackingStore;
    private _assetLoadingManagerBackingStore;
    /**
     * Getter for loop manager used for loop mamnagement
     * @return {LoopManager} [description]
     */
    readonly loopManager: LoopManager;
    /**
     * Getter for assetLoading manager
     * @return {LoopManager} [description]
     */
    readonly assetLoadingManager: AssetLoadingManager;
    /**
     * Register coroutine invoked by timer in millisecound.
     * Yield values from coroutine will be used as next frame to recall the generator.
     * Ensure this is not called exactly specified timing. This will be called in the frame after specified timing.
     */
    protected __registerTimerCoroutine(coroutine: () => IterableIterator<number>, tag?: string | symbol): void;
    /**
     * Register coroutine invoked by timer in frame count.
     * Yield values from coroutine will be used as next frame to recall the generator.
     */
    protected __registerFrameCoroutine(coroutine: () => IterableIterator<number>, tag?: string | symbol): void;
    /**
     * Call method after specified time elapsed.
     * If the component was disabled, specified method will be called after component being enabled.
     * @param  {Timer}  method [description]
     * @return {[type]}        [description]
     */
    protected __invoke(method: (timer: Timer) => void, timeInMillis: number): void;
    protected __unregisterTimerCoroutine(tag?: string | symbol): void;
    protected __unregisterFrameCoroutine(tag?: string | symbol): void;
    protected __registerAssetLoading<T>(loadingPromise: Promise<T>): Promise<T>;
}
