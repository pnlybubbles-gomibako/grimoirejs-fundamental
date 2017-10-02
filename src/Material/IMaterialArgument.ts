import IRenderable from "../SceneRenderer/IRenderable";
import CameraComponent from "../Components/CameraComponent";
import Rectangle from "grimoirejs-math/ref/Rectangle";
import Texture2D from "../Resource/Texture2D";
import TransformComponent from "../Components/TransformComponent";
import Geometry from "../Geometry/Geometry";
interface IMaterialArgument {
  indexGroup: string;
  geometry: Geometry;
  sceneDescription: { [key: string]: any };
  camera: CameraComponent;
  viewport: Rectangle;
  transform: TransformComponent;
  drawOffset?: number;
  drawCount?: number;
  technique: string;
  renderable?: IRenderable;
}

export default IMaterialArgument;
