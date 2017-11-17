import Matrix from "grimoirejs-math/ref/Matrix";
import Vector3 from "grimoirejs-math/ref/Vector3";
import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import IRenderArgument from "../SceneRenderer/IRenderArgument";
import Timer from "../Util/Timer";
import SceneComponent from "./SceneComponent";
import TransformComponent from "./TransformComponent";
/**
 * シーンを描画するカメラのコンポーネント
 * このコンポーネントによって、透視射影や正方射影などの歪みを調整します。
 * また、このコンポーネントの付属するノードに属する`Transoform`によって、カメラの位置や向きが確定されます。
 */
export default class CameraComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    private static _frontOrigin;
    private static _upOrigin;
    containedScene: SceneComponent;
    transform: TransformComponent;
    protected __viewMatrix: Matrix;
    protected __projectionMatrix: Matrix;
    protected __invProjectionMatrix: Matrix;
    protected __projectionViewMatrix: Matrix;
    private _autoAspect;
    private _aspectCache;
    private _renderQueue;
    private _eyeCache;
    private _lookAtCache;
    private _upCache;
    private _far;
    private _near;
    private _fovy;
    private _orthoSize;
    private _aspect;
    private _orthographic;
    readonly ViewMatrix: Matrix;
    readonly ProjectionMatrix: Matrix;
    readonly InvProjectionMatrix: Matrix;
    readonly ProjectionViewMatrix: Matrix;
    Far: number;
    Near: number;
    Aspect: number;
    Fovy: number;
    OrthoSize: number;
    OrthographicMode: boolean;
    AutoAspect: boolean;
    /**
   * Find scene tag recursively.
   * @param  {GomlNode}       node [the node to searching currently]
   * @return {SceneComponent}      [the scene component found]
   */
    private static _findContainedScene(node);
    $awake(): void;
    $mount(): void;
    $unmount(): void;
    /**
     * Convert global position of transoform to viewport relative position.
     * @param  {TransformComponent} transform The transform to convert position
     * @return {Vector3}                      Viewport relative position
     */
    getViewportRelativePosition(transform: TransformComponent): Vector3;
    /**
     * Convert specified world position to viewport relative position.
     * @param  {Vector3} worldPos [description]
     * @return {Vector3}          [description]
     */
    getViewportRelativePosition(worldPos: Vector3): Vector3;
    updateContainedScene(timer: Timer): void;
    renderScene(args: IRenderArgument): void;
    updateTransform(): void;
    private _justifyAspect(args);
    private _recalculateProjection();
}
