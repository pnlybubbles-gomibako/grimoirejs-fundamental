import Matrix from "grimoirejs-math/ref/Matrix";
import Quaternion from "grimoirejs-math/ref/Quaternion";
import Vector3 from "grimoirejs-math/ref/Vector3";
import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import CameraComponent from "./CameraComponent";
/**
 * シーン中に存在する物体の変形を司るコンポーネント
 * このコンポーネントによって物体の座標や回転量、拡大料などが定義されます。
 * シーン中の全ての物体は必ずこのコンポーネントを含まなければなりません。
 */
export default class TransformComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    /**
     * Source vector to be multiplied with global transform to calculate forward direction of attached object.
     */
    private static _forwardBase;
    /**
     * Source vector to be multiplied with global transform to calculate up direction of attached object.
     */
    private static _upBase;
    /**
     * Source vector to be multiplied with global transform to calculate right direction of attached object.
     */
    private static _rightBase;
    /**
     * Local transform matrix representing scaling,rotation and translation of attached object.
     * @return {[type]} [description]
     */
    localTransform: Matrix;
    scale: Vector3;
    position: Vector3;
    rotation: Quaternion;
    /**
     * The children transform should be notified when this transform was updated.
     * @type {TransformComponent[]}
     */
    private _children;
    /**
     * The reference to parent TransformComponent.
     * When this object is root object of contained scene, this value should be null.
     * @type {TransformComponent}
     */
    private _parentTransform;
    /**
     * Calculation cache to
     * @return {[type]} [description]
     */
    private _cachePVM;
    private _cacheVM;
    /**
     * Cache of forward direction of this object
     */
    private _forward;
    /**
     * Cache of up direction of this object.
     */
    private _up;
    /**
     * Cache of right direction of this object.
     */
    private _right;
    private _globalPosition;
    private _globalScale;
    private _matrixTransformMode;
    private _updatedTransform;
    private _globalTransform;
    private _globalTransformInverse;
    /**
     * Global transform that consider parent transform and local transform
     * @return {[type]} [description]
     */
    readonly globalTransform: Matrix;
    readonly globalTransformInverse: Matrix;
    readonly globalPosition: Vector3;
    readonly globalScale: Vector3;
    readonly forward: Vector3;
    readonly up: Vector3;
    readonly right: Vector3;
    calcPVM(camera: CameraComponent): Matrix;
    calcVM(camera: CameraComponent): Matrix;
    $awake(): void;
    $mount(): void;
    $unmount(): void;
    notifyUpdateTransform(): void;
    applyMatrix(mat: Matrix): void;
    private _updateTransform(noDirectionalUpdate?);
    /**
     * Update global transoform.
     */
    private _updateGlobalTransform(noDirectionalUpdate?);
    private _updateDirections();
    private _updateGlobalProperty();
}
