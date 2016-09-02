import IDObject from "grimoirejs/lib/Core/Base/IDObject";


abstract class ResourceBase extends IDObject {
  public destroyed: boolean = false;

  private _valid: boolean;

  public validPromise: Promise<ResourceBase>;

  private _validResolve: (r: ResourceBase) => void;

  public get valid(): boolean {
    return this._valid;
  }

  public set valid(val: boolean) {
    if (this._valid === val) {
      return;
    }
    this._valid = val;
    if (this._valid) {
      this._validResolve(this);
    } else {
      this.validPromise = new Promise((resolve) => {
        this._validResolve = resolve;
      });
    }
  }
  constructor(public gl: WebGLRenderingContext) {
    super();
    this.valid = false;
  }

  public destroy(): void {
    this.destroyed = true;
  }
}

export default ResourceBase;
