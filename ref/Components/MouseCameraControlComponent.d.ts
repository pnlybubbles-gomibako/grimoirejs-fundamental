import Vector3 from "grimoirejs-math/ref/Vector3";
import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
export default class MouseCameraControlComponent extends Component {
    static attributes: {
        [key: string]: IAttributeDeclaration;
    };
    rotateSpeed: number;
    zoomSpeed: number;
    moveSpeed: number;
    center: Vector3;
    distance: number;
    private _transform;
    private _updated;
    private _lastCenter;
    private _lastScreenPos;
    private _lastPinchDistance;
    private _initialDirection;
    private _initialRotation;
    private _xsum;
    private _ysum;
    private _d;
    private _listeners;
    $awake(): void;
    $mount(): void;
    $unmount(): void;
    $initialized(): void;
    $update(): void;
    private _contextMenu(m);
    private _touchStart(m);
    private _touchEnd(m);
    private _mouseMove(m);
    private _touchMove(m);
    private _mouseWheel(m);
    private _checkButtonPress(m, isRight);
    private _move(x, y);
    private _rotate(x, y);
    private _zoom(delta);
}
