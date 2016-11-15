import Vector2 from "grimoirejs-math/ref/Vector2";
import IMaterialArgument from "./IMaterialArgument";
import UniformProxy from "../Resource/UniformProxy";
import IVariableInfo from "./Transformers/Interfaces/IVariableInfo";
/**
 * Environment uniform value resolver
 */
export default class EnvUniformValueResolver {
  /**
   * Static environment uniform value resolvers which names are already known.
   * @type {IVariableInfo}
   */
  public static resolvers: { [key: string]: (valInfo: IVariableInfo, name: string) => ((proxy: UniformProxy, args: IMaterialArgument) => void) } = {};

  /**
   * Dynamic environment uniform value resolvers which names are not known yet.
   * @type {IVariableInfo}
   */
  public static dynamicResolvers: ((valInfo: IVariableInfo, name: string) => ((proxy: UniformProxy, args: IMaterialArgument) => void))[] = [];

  /**
   * Add static environment uniform value resolver to specified name.
   * @param  {string} name     [description]
   * @param  {string} resolver [description]
   * @return {[type]}          [description]
   */
  public static addResolver(name: string, resolver: (valInfo: IVariableInfo, name: string) => ((proxy: UniformProxy, args: IMaterialArgument) => void)): void {
    EnvUniformValueResolver.resolvers[name] = resolver;
  }

  /**
   * Add dynamic environment uniform value resolver.
   * When pasased variable are not resolved by a resolver, that resolver should return null or undefined.
   * @param  {string} resolver [description]
   * @return {[type]}          [description]
   */
  public static addDynamicResolver(resolver: (valInfo: IVariableInfo, name: string) => ((proxy: UniformProxy, args: IMaterialArgument) => void)): void {
    EnvUniformValueResolver.dynamicResolvers.push(resolver);
  }

  public static resolve(name: string, valInfo: IVariableInfo): ((proxy: UniformProxy, args: IMaterialArgument) => void) {
    if (EnvUniformValueResolver.resolvers[name]) {
      return EnvUniformValueResolver.resolvers[name](valInfo, name);
    } else {
      let targetResolver = null;
      for (let i = 0; i < EnvUniformValueResolver.dynamicResolvers.length; i++) {
        targetResolver = EnvUniformValueResolver.dynamicResolvers[i](valInfo, name);
        if (targetResolver != null) {
          return targetResolver;
        }
      }
    }
  }
}

// Matricies
EnvUniformValueResolver.addResolver("_matPVM", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.transform.calcPVM(args.camera.camera)));
EnvUniformValueResolver.addResolver("_matP", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.camera.camera.getProjectionMatrix()));
EnvUniformValueResolver.addResolver("_matV", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.camera.camera.getViewMatrix()));
EnvUniformValueResolver.addResolver("_matM", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.transform.globalTransform));
EnvUniformValueResolver.addResolver("_matVM", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.transform.calcVM(args.camera.camera)));
EnvUniformValueResolver.addResolver("_matPV", (valInfo, name) => (proxy, args) => proxy.uniformMatrix(name, args.camera.camera.getProjectionViewMatrix()));



// Misc
EnvUniformValueResolver.addResolver("_time", (valInfo, name) => (proxy, args) => proxy.uniformFloat(name, Date.now() % 1000000));
EnvUniformValueResolver.addResolver("_viewportSize", (valInfo, name) => {
  const cacheVec = new Vector2(0, 0);
  return (proxy, args) => {
    cacheVec.X = args.viewport.Width;
    cacheVec.Y = args.viewport.Height;
    proxy.uniformVector2(name, cacheVec);
  };
});
EnvUniformValueResolver.addResolver("_cameraPosition", (valInfo, name) => (proxy, args) => proxy.uniformVector3(name, args.camera.transform.globalPosition));
EnvUniformValueResolver.addResolver("_cameraDirection", (valInfo, name) => (proxy, args) => proxy.uniformVector3(name, args.camera.transform.forward));
