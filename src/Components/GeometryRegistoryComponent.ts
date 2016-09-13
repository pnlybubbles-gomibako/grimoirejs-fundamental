import GeometryFactory from "../Geometry/GeometryFactory";
import Geometry from "../Geometry/Geometry";
import Component from "grimoirejs/lib/Node/Component";
import GrimoireInterface from "grimoirejs";
import IAttributeDeclaration from "grimoirejs/lib/Node/IAttributeDeclaration";

export default class GeometryRegistoryComponent extends Component {
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    // Specify the attributes user can intaract
  };

  private _geometries: { [key: string]: Geometry } = {};

  public $awake(): void {
    this.companion.set(this.name, this);
    this.companion.set(GrimoireInterface.ns(this.name.ns)("GeometryFactory"), new GeometryFactory(this.companion.get("gl")));
  }

  public addGeometry(name: string, geometry: Geometry): void {
    this._geometries[name] = geometry;
  }

  public removeGeometry(name: string): void {
    if (this._geometries[name]) {
      delete this._geometries[name];
    }
  }

  public getGeometry(name: string): Geometry {
    return this._geometries[name];
  }
}
