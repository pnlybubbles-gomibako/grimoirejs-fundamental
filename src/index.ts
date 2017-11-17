import AssetAssetLoader from "./Asset/AssetLoader";
import AssetCacheResolver from "./Asset/CacheResolver";
import AssetExternalResourceResolver from "./Asset/ExternalResourceResolver";
import AssetImageResolver from "./Asset/ImageResolver";
import AssetNameResolver from "./Asset/NameResolver";
import AssetTextFileResolver from "./Asset/TextFileResolver";
import AssetVideoResolver from "./Asset/VideoResolver";
import ComponentsAssetLoadingManagerComponent from "./Components/AssetLoadingManagerComponent";
import ComponentsBasicComponent from "./Components/BasicComponent";
import ComponentsCameraComponent from "./Components/CameraComponent";
import ComponentsCanvasInitializerComponent from "./Components/CanvasInitializerComponent";
import ComponentsFullscreenComponent from "./Components/FullscreenComponent";
import ComponentsGeometryComponent from "./Components/GeometryComponent";
import ComponentsGeometryRegistoryComponent from "./Components/GeometryRegistoryComponent";
import ComponentsLoopManagerComponent from "./Components/LoopManagerComponent";
import ComponentsMaterialComponent from "./Components/MaterialComponent";
import ComponentsMaterialContainerBase from "./Components/MaterialContainerBase";
import ComponentsMaterialContainerComponent from "./Components/MaterialContainerComponent";
import ComponentsMaterialImporterComponent from "./Components/MaterialImporterComponent";
import ComponentsMeshRendererComponent from "./Components/MeshRendererComponent";
import ComponentsMouseCameraControlComponent from "./Components/MouseCameraControlComponent";
import ComponentsRenderComponentBase from "./Components/RenderComponentBase";
import ComponentsRendererComponent from "./Components/RendererComponent";
import ComponentsRendererManagerComponent from "./Components/RendererManagerComponent";
import ComponentsRenderingTargetComponent from "./Components/RenderingTargetComponent";
import ComponentsRenderStageRenderHitareaComponent from "./Components/RenderStage/RenderHitareaComponent";
import ComponentsRenderStageRenderQuadComponent from "./Components/RenderStage/RenderQuadComponent";
import ComponentsRenderStageRenderSceneComponent from "./Components/RenderStage/RenderSceneComponent";
import ComponentsRenderStageRenderStageBase from "./Components/RenderStage/RenderStageBase";
import ComponentsRenderStageSingleBufferRenderStageBase from "./Components/RenderStage/SingleBufferRenderStageBase";
import ComponentsSceneComponent from "./Components/SceneComponent";
import ComponentsTextureColorBufferTextureUpdator from "./Components/Texture/ColorBufferTextureUpdator";
import ComponentsTextureConstantSizeResourceResizer from "./Components/Texture/ConstantSizeResourceResizer";
import ComponentsTextureImageTextureUpdator from "./Components/Texture/ImageTextureUpdator";
import ComponentsTextureRenderBufferUpdator from "./Components/Texture/RenderBufferUpdator";
import ComponentsTextureResizableResourceUpdator from "./Components/Texture/ResizableResourceUpdator";
import ComponentsTextureResourceResizerComponentBase from "./Components/Texture/ResourceResizerComponentBase";
import ComponentsTextureTextureContainer from "./Components/Texture/TextureContainer";
import ComponentsTextureTextureUpdatorComponentBase from "./Components/Texture/TextureUpdatorComponentBase";
import ComponentsTextureVideoTextureUpdator from "./Components/Texture/VideoTextureUpdator";
import ComponentsTextureViewportSizeResourceResizer from "./Components/Texture/ViewportSizeResourceResizer";
import ComponentsTransformComponent from "./Components/TransformComponent";
import ConvertersCanvasSizeConverter from "./Converters/CanvasSizeConverter";
import ConvertersGeometryConverter from "./Converters/GeometryConverter";
import ConvertersMaterialConverter from "./Converters/MaterialConverter";
import ConvertersNodeConverter from "./Converters/NodeConverter";
import ConvertersPositionConverter from "./Converters/PositionConverter";
import ConvertersRenderingTargetConverter from "./Converters/RenderingTargetConverter";
import ConvertersTextureConverter from "./Converters/TextureConverter";
import ConvertersViewportConverter from "./Converters/ViewportConverter";
import GeometryDefaultPrimitives from "./Geometry/DefaultPrimitives";
import GeometryGeometry from "./Geometry/Geometry";
import GeometryGeometryFactory from "./Geometry/GeometryFactory";
import GeometryGeometryUtility from "./Geometry/GeometryUtility";
import GeometryMorphGeometry from "./Geometry/MorphGeometry";
import MaterialDefaultsDefaultDynamicStateResolvers from "./Material/Defaults/DefaultDynamicStateResolvers";
import MaterialDefaultsDefaultMacro from "./Material/Defaults/DefaultMacro";
import MaterialDefaultsDefaultMaterial from "./Material/Defaults/DefaultMaterial";
import MaterialDefaultsDefaultStaticImport from "./Material/Defaults/DefaultStaticImport";
import MaterialGLStateConfigurator from "./Material/GLStateConfigurator";
import MaterialMacroRegistory from "./Material/MacroRegistory";
import MaterialMaterial from "./Material/Material";
import MaterialMaterialFactory from "./Material/MaterialFactory";
import MaterialPass from "./Material/Pass";
import MaterialPassProgram from "./Material/PassProgram";
import MaterialShaderMixer from "./Material/ShaderMixer";
import MaterialTechnique from "./Material/Technique";
import MaterialTextureReference from "./Material/TextureReference";
import MaterialUniformResolverContainer from "./Material/UniformResolverContainer";
import MaterialUniformResolverRegistry from "./Material/UniformResolverRegistry";
import MaterialUniformsMatricesRegister from "./Material/Uniforms/MatricesRegister";
import MaterialUniformsMiscRegister from "./Material/Uniforms/MiscRegister";
import MaterialUniformsUserValueRegister from "./Material/Uniforms/UserValueRegister";
import nodes from "./nodes";
import ResourceBuffer from "./Resource/Buffer";
import ResourceFrameBuffer from "./Resource/FrameBuffer";
import ResourceGLExtRequestor from "./Resource/GLExtRequestor";
import ResourceGLRelatedRegistryBase from "./Resource/GLRelatedRegistryBase";
import ResourceGLResource from "./Resource/GLResource";
import ResourceGLSLPrecisionChecker from "./Resource/GLSLPrecisionChecker";
import ResourceGLUtility from "./Resource/GLUtility";
import ResourceManagedProgram from "./Resource/ManagedProgram";
import ResourceManagedShader from "./Resource/ManagedShader";
import ResourceProgram from "./Resource/Program";
import ResourceRenderBuffer from "./Resource/RenderBuffer";
import ResourceRenderingTargetCanvasRegionRenderingTarget from "./Resource/RenderingTarget/CanvasRegionRenderingTarget";
import ResourceRenderingTargetCanvasRenderingTarget from "./Resource/RenderingTarget/CanvasRenderingTarget";
import ResourceRenderingTargetOffscreenRenderingTarget from "./Resource/RenderingTarget/OffscreenRenderingTarget";
import ResourceRenderingTargetRenderingBufferResourceRegistry from "./Resource/RenderingTarget/RenderingBufferResourceRegistry";
import ResourceRenderingTargetRenderingTargetRegistry from "./Resource/RenderingTarget/RenderingTargetRegistry";
import ResourceResourceCache from "./Resource/ResourceCache";
import ResourceShader from "./Resource/Shader";
import ResourceTexture from "./Resource/Texture";
import ResourceTexture2D from "./Resource/Texture2D";
import ResourceUniformProxy from "./Resource/UniformProxy";
import ResourceViewport from "./Resource/Viewport";
import SceneRendererDrawPriorty from "./SceneRenderer/DrawPriorty";
import SceneRendererRenderQueue from "./SceneRenderer/RenderQueue";
import SceneRendererRenderQueueRegistry from "./SceneRenderer/RenderQueueRegistry";
import SortCommentRemover from "./Sort/CommentRemover";
import SortImportResolver from "./Sort/ImportResolver";
import SortNameSemanticsPair from "./Sort/NameSemanticsPair";
import SortParser from "./Sort/Parser";
import SortPreferences from "./Sort/Preferences";
import SortSortTransformUtility from "./Sort/SortTransformUtility";
import SortTypeToConstant from "./Sort/TypeToConstant";
import UtilHashCalculator from "./Util/HashCalculator";
import UtilMeshIndexCalculator from "./Util/MeshIndexCalculator";
import UtilTextureSizeCalculator from "./Util/TextureSizeCalculator";
import UtilTimer from "./Util/Timer";

export const __VERSION__ = "0.30.0beta5";
export const __NAME__ = "grimoirejs-fundamental";

import __MAIN__ from "./main";

let __EXPOSE__ = {
  "Asset": {
    "AssetLoader": AssetAssetLoader,
    "CacheResolver": AssetCacheResolver,
    "ExternalResourceResolver": AssetExternalResourceResolver,
    "ImageResolver": AssetImageResolver,
    "NameResolver": AssetNameResolver,
    "TextFileResolver": AssetTextFileResolver,
    "VideoResolver": AssetVideoResolver
  },
  "Components": {
    "AssetLoadingManagerComponent": ComponentsAssetLoadingManagerComponent,
    "BasicComponent": ComponentsBasicComponent,
    "CameraComponent": ComponentsCameraComponent,
    "CanvasInitializerComponent": ComponentsCanvasInitializerComponent,
    "FullscreenComponent": ComponentsFullscreenComponent,
    "GeometryComponent": ComponentsGeometryComponent,
    "GeometryRegistoryComponent": ComponentsGeometryRegistoryComponent,
    "LoopManagerComponent": ComponentsLoopManagerComponent,
    "MaterialComponent": ComponentsMaterialComponent,
    "MaterialContainerBase": ComponentsMaterialContainerBase,
    "MaterialContainerComponent": ComponentsMaterialContainerComponent,
    "MaterialImporterComponent": ComponentsMaterialImporterComponent,
    "MeshRendererComponent": ComponentsMeshRendererComponent,
    "MouseCameraControlComponent": ComponentsMouseCameraControlComponent,
    "RenderComponentBase": ComponentsRenderComponentBase,
    "RendererComponent": ComponentsRendererComponent,
    "RendererManagerComponent": ComponentsRendererManagerComponent,
    "RenderingTargetComponent": ComponentsRenderingTargetComponent,
    "RenderStage": {
      "RenderHitareaComponent": ComponentsRenderStageRenderHitareaComponent,
      "RenderQuadComponent": ComponentsRenderStageRenderQuadComponent,
      "RenderSceneComponent": ComponentsRenderStageRenderSceneComponent,
      "RenderStageBase": ComponentsRenderStageRenderStageBase,
      "SingleBufferRenderStageBase": ComponentsRenderStageSingleBufferRenderStageBase
    },
    "SceneComponent": ComponentsSceneComponent,
    "Texture": {
      "ColorBufferTextureUpdator": ComponentsTextureColorBufferTextureUpdator,
      "ConstantSizeResourceResizer": ComponentsTextureConstantSizeResourceResizer,
      "ImageTextureUpdator": ComponentsTextureImageTextureUpdator,
      "RenderBufferUpdator": ComponentsTextureRenderBufferUpdator,
      "ResizableResourceUpdator": ComponentsTextureResizableResourceUpdator,
      "ResourceResizerComponentBase": ComponentsTextureResourceResizerComponentBase,
      "TextureContainer": ComponentsTextureTextureContainer,
      "TextureUpdatorComponentBase": ComponentsTextureTextureUpdatorComponentBase,
      "VideoTextureUpdator": ComponentsTextureVideoTextureUpdator,
      "ViewportSizeResourceResizer": ComponentsTextureViewportSizeResourceResizer
    },
    "TransformComponent": ComponentsTransformComponent
  },
  "Converters": {
    "CanvasSizeConverter": ConvertersCanvasSizeConverter,
    "GeometryConverter": ConvertersGeometryConverter,
    "MaterialConverter": ConvertersMaterialConverter,
    "NodeConverter": ConvertersNodeConverter,
    "PositionConverter": ConvertersPositionConverter,
    "RenderingTargetConverter": ConvertersRenderingTargetConverter,
    "TextureConverter": ConvertersTextureConverter,
    "ViewportConverter": ConvertersViewportConverter
  },
  "Geometry": {
    "DefaultPrimitives": GeometryDefaultPrimitives,
    "Geometry": GeometryGeometry,
    "GeometryFactory": GeometryGeometryFactory,
    "GeometryUtility": GeometryGeometryUtility,
    "MorphGeometry": GeometryMorphGeometry
  },
  "Material": {
    "Defaults": {
      "DefaultDynamicStateResolvers": MaterialDefaultsDefaultDynamicStateResolvers,
      "DefaultMacro": MaterialDefaultsDefaultMacro,
      "DefaultMaterial": MaterialDefaultsDefaultMaterial,
      "DefaultStaticImport": MaterialDefaultsDefaultStaticImport
    },
    "GLStateConfigurator": MaterialGLStateConfigurator,
    "MacroRegistory": MaterialMacroRegistory,
    "Material": MaterialMaterial,
    "MaterialFactory": MaterialMaterialFactory,
    "Pass": MaterialPass,
    "PassProgram": MaterialPassProgram,
    "ShaderMixer": MaterialShaderMixer,
    "Technique": MaterialTechnique,
    "TextureReference": MaterialTextureReference,
    "UniformResolverContainer": MaterialUniformResolverContainer,
    "UniformResolverRegistry": MaterialUniformResolverRegistry,
    "Uniforms": {
      "MatricesRegister": MaterialUniformsMatricesRegister,
      "MiscRegister": MaterialUniformsMiscRegister,
      "UserValueRegister": MaterialUniformsUserValueRegister
    }
  },
  "nodes": nodes,
  "Resource": {
    "Buffer": ResourceBuffer,
    "FrameBuffer": ResourceFrameBuffer,
    "GLExtRequestor": ResourceGLExtRequestor,
    "GLRelatedRegistryBase": ResourceGLRelatedRegistryBase,
    "GLResource": ResourceGLResource,
    "GLSLPrecisionChecker": ResourceGLSLPrecisionChecker,
    "GLUtility": ResourceGLUtility,
    "ManagedProgram": ResourceManagedProgram,
    "ManagedShader": ResourceManagedShader,
    "Program": ResourceProgram,
    "RenderBuffer": ResourceRenderBuffer,
    "RenderingTarget": {
      "CanvasRegionRenderingTarget": ResourceRenderingTargetCanvasRegionRenderingTarget,
      "CanvasRenderingTarget": ResourceRenderingTargetCanvasRenderingTarget,
      "OffscreenRenderingTarget": ResourceRenderingTargetOffscreenRenderingTarget,
      "RenderingBufferResourceRegistry": ResourceRenderingTargetRenderingBufferResourceRegistry,
      "RenderingTargetRegistry": ResourceRenderingTargetRenderingTargetRegistry
    },
    "ResourceCache": ResourceResourceCache,
    "Shader": ResourceShader,
    "Texture": ResourceTexture,
    "Texture2D": ResourceTexture2D,
    "UniformProxy": ResourceUniformProxy,
    "Viewport": ResourceViewport
  },
  "SceneRenderer": {
    "DrawPriorty": SceneRendererDrawPriorty,
    "RenderQueue": SceneRendererRenderQueue,
    "RenderQueueRegistry": SceneRendererRenderQueueRegistry
  },
  "Sort": {
    "CommentRemover": SortCommentRemover,
    "ImportResolver": SortImportResolver,
    "NameSemanticsPair": SortNameSemanticsPair,
    "Parser": SortParser,
    "Preferences": SortPreferences,
    "SortTransformUtility": SortSortTransformUtility,
    "TypeToConstant": SortTypeToConstant
  },
  "Util": {
    "HashCalculator": UtilHashCalculator,
    "MeshIndexCalculator": UtilMeshIndexCalculator,
    "TextureSizeCalculator": UtilTextureSizeCalculator,
    "Timer": UtilTimer
  }
};

import gr from "grimoirejs";
gr.notifyRegisteringPlugin(__NAME__);
let __BASE__ = __MAIN__();

Object.assign(__EXPOSE__, {
  __VERSION__: __VERSION__,
  __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);

(window as any)["GrimoireJS"].lib.fundamental = __EXPOSE__;

export default __BASE__;
