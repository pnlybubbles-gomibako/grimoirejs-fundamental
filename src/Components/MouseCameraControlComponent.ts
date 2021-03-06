import Matrix from "grimoirejs-math/ref/Matrix";
import Quaternion from "grimoirejs-math/ref/Quaternion";
import Vector3 from "grimoirejs-math/ref/Vector3";
import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import TransformComponent from "./TransformComponent";

export default class MouseCameraControlComponent extends Component {
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    rotateSpeed: {
      default: 1,
      converter: "Number",
    },
    zoomSpeed: {
      default: 1,
      converter: "Number",
    },
    moveSpeed: {
      default: 1,
      converter: "Number",
    },
    center: {
      default: "0,0,0",
      converter: "Position",
      lazy: true,
    },
    distance: {
      default: null,
      converter: "Number",
    },
    preventScroll: {
      default: true,
      converter: "Boolean",
    },
  };

  // propaty bound to
  public rotateSpeed: number;
  public zoomSpeed: number;
  public moveSpeed: number;
  public center: Vector3;
  public distance: number;
  private _transform: TransformComponent;
  private _updated = false;

  private _lastCenter: Vector3 = null;

  private _lastScreenPos: { x: number, y: number } = null;
  private _lastTouchScale = 1;

  private _initialDirection: Vector3;
  private _initialRotation: Quaternion;

  private _xsum = 0;

  private _ysum = 0;

  private _d: Vector3 = Vector3.Zero;

  private _listeners: any;

  public $awake(): void {
    this.__bindAttributes();
    this._listeners = {
      mousemove: this._mouseMove.bind(this),
      touchmove: this._touchMove.bind(this),
      touchstart: this._touchStart.bind(this),
      touchend: this._touchEnd.bind(this),
      contextmenu: this._contextMenu.bind(this),
      wheel: this._mouseWheel.bind(this),
    };
  }

  public $mount(): void {
    this._transform = this.node.getComponent(TransformComponent);
    const canvasElement = this.companion.get("canvasElement");
    canvasElement.addEventListener("mousemove", this._listeners.mousemove);
    canvasElement.addEventListener("touchmove", this._listeners.touchmove);
    canvasElement.addEventListener("touchstart", this._listeners.touchstart);
    canvasElement.addEventListener("touchend", this._listeners.touchend);
    canvasElement.addEventListener("contextmenu", this._listeners.contextmenu);
    canvasElement.addEventListener("wheel", this._listeners.wheel);

    this._lastScreenPos = null;
    this._lastTouchScale = 1;
    this._xsum = 0;
    this._ysum = 0;
  }
  public $unmount() {
    const canvasElement = this.companion.get("canvasElement");
    canvasElement.removeEventListener("mousemove", this._listeners.mousemove);
    canvasElement.removeEventListener("touchmove", this._listeners.touchmove);
    canvasElement.removeEventListener("touchstart", this._listeners.touchstart);
    canvasElement.removeEventListener("touchend", this._listeners.touchend);
    canvasElement.removeEventListener("contextmenu", this._listeners.contextmenu);
    canvasElement.removeEventListener("wheel", this._listeners.wheel);
  }

  public $initialized() {
    const look = Vector3.normalize(this.center.subtractWith(this._transform.position));
    const g = Quaternion.fromToRotation(this._transform.forward, look).normalize();
    this._transform.rotation = g;
    this._initialRotation = g;
    this._initialDirection = Vector3.copy(this._transform.forward.negateThis()).normalized;

    if (this.distance !== null) {
      this._transform.position = this.center.addWith(this._initialDirection.multiplyWith(this.distance));
    } else {
      this.distance = this._transform.position.subtractWith(this.center).magnitude;
    }
  }
  public $update() {
    if (this.isActive && this._updated || !this._lastCenter || !this.center.equalWith(this._lastCenter)) {
      this._updated = false;
      this._lastCenter = this.center;

      // rotate excution
      const rotationVartical = Quaternion.angleAxis(-this._xsum * this.rotateSpeed * 0.01, Vector3.YUnit);
      const rotationHorizontal = Quaternion.angleAxis(-this._ysum * this.rotateSpeed * 0.01, Vector3.XUnit);
      const rotation = Quaternion.multiply(rotationVartical, rotationHorizontal);

      const rotationMat = Matrix.rotationQuaternion(rotation);
      const direction = Matrix.transformNormal(rotationMat, this._initialDirection);
      this._transform.position = this.center.addWith(this._d).addWith(Vector3.normalize(direction).multiplyWith(this.distance));
      this._transform.rotation = rotation;
      this._transform.rotation = Quaternion.multiply(rotation, this._initialRotation);
    }
  }

  private _contextMenu(m: MouseEvent): void {
    if (!this.isActive) {
      return;
    }
    m.preventDefault();
  }

  private _touchStart(m: TouchEvent): void {
    if (!this.isActive) {
      return;
    }
    this._lastTouchScale = 1;
    this._lastScreenPos = null;
  }

  private _touchEnd(m: TouchEvent): void {
    if (!this.isActive) {
      return;
    }
    this._lastTouchScale = 1;
  }

  private _mouseMove(m: MouseEvent): void {
    if (!this.isActive) {
      return;
    }
    const x = m.screenX;
    const y = m.screenY;
    if (this._lastScreenPos === null) {
      this._lastScreenPos = { x, y };
      return;
    }
    if (this._checkButtonPress(m, false)) {
      m.preventDefault();
      this._move(x, y);
    } else if (this._checkButtonPress(m, true)) {
      m.preventDefault();
      this._rotate(x, y);
    }
    this._lastScreenPos = { x, y };
  }

  private _touchMove(m: TouchEvent): void {
    if (!this.isActive) {
      return;
    }
    switch (m.touches.length) {
      case 1:
        // TouchEvent type definition is buggy (pageX is not found)
        const x: number = (m as any).pageX;
        const y: number = (m as any).pageY;
        if (this._lastScreenPos === null) {
          this._lastScreenPos = { x, y };
          return;
        }
        m.preventDefault();
        this._rotate(x, y);
        this._lastScreenPos = { x, y };
        break;
      case 2:
        if (this.getAttribute("preventScroll")) {
          m.preventDefault();
        }
        // TouchEvent type definition is buggy (pageX is not found)
        const scale: number = (m as any).scale;
        this._zoom((this._lastTouchScale - scale) * 100);
        this._lastTouchScale = scale;
        break;
      default:
    }
  }

  private _mouseWheel(m: MouseWheelEvent): void {
    if (!this.isActive) {
      return;
    }
    if (this.getAttribute("preventScroll")) {
      m.preventDefault();
    }
    this._zoom(m.deltaY);
  }

  private _checkButtonPress(m: MouseEvent, isRight: boolean) {
    if ("buttons" in m) {
      if (isRight) {
        return (m.buttons & 1) > 0;
      } else {
        return (m.buttons & 2) > 0;
      }
    } else {
      if (isRight) {
        return m.which === 1;
      } else {
        return m.which === 3;
      }
    }
  }

  private _move(x: number, y: number): void {
    const diffX = x - this._lastScreenPos.x;
    const diffY = y - this._lastScreenPos.y;
    const moveX = -diffX * this.moveSpeed * 0.01;
    const moveY = diffY * this.moveSpeed * 0.01;
    this._d = this._d.addWith(this._transform.right.multiplyWith(moveX)).addWith(this._transform.up.multiplyWith(moveY));
    this._updated = true;
  }

  private _rotate(x: number, y: number): void {
    const diffX = x - this._lastScreenPos.x;
    const diffY = y - this._lastScreenPos.y;
    this._xsum += diffX;
    this._ysum += diffY;
    this._ysum = Math.min(Math.PI * 50, this._ysum);
    this._ysum = Math.max(-Math.PI * 50, this._ysum);
    this._updated = true;
  }

  private _zoom(delta: number): void {
    const dir = Vector3.subtract(this._transform.position, this.center).normalized;
    const moveDist = delta * this.zoomSpeed * 0.05;
    this.distance = Math.max(1, this.distance + moveDist);
    this._transform.position = this.center.addWith(dir.multiplyWith(this.distance));
  }
}
