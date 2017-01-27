export default {
  /**
   * GOMLファイルのルートノード
   * ツリーに唯一一つ必要なコンポーネントなどをつけておくためのノード。
   * 特に、`<canvas>`の初期化やループの管理など、最初の初期化時のパラメーターを受け取るためのコンポーネントとともに、
   * `<canvas>`の設定(`width`や`height`)またはフルスクリーンなどのコンポーネントを含む。
   */
  goml: {
    components: ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "RendererManager", "Fullscreen"]
  },
  /**
   * ある3D空間上のモデルの配置やカメラの設定などの場面の設定を含むためのノード
   * カメラや、ライト、メッシュなど空間に配置するためのノードです。
   * 全ての場面に存在する座標を持ちうるノード(`TransformComponent`を含むノード)は必ずこのノードの子ノードのとして存在する必要があります。
   */
  scene: {
    components: ["Scene"]
  },
  /**
   * 3D空間上の物体を意味するノード
   * メッシュやカメラなどのベースとなるノードです。このノードの子要素には親要素の変型量(`position`や`rotation`)などが伝搬します。
   * 詳しくは`TransformComponent`を参照すると良いでしょう。
   */
  object: {
    components: ["Transform"]
  },
  /**
   * 3D空間を撮影するためのカメラのノード
   * 3D空間を撮影するためのカメラを意味するノードです。シーンをレンダリングするには最低一つのカメラがシーンに属していなければなりません。
   */
  camera: {
    components: ["Camera"],
    default: {
      position: [0, 0, 10]
    },
    super: "object"
  },
  /**
   * 3D空間上のモデルなど、 **映るもの** を表すためのノード
   * 3D空間上に存在する映るものを意味するノードです。シーンに何かを写すには最低一つのメッシュがシーンに属していなければなりません。
   * メッシュは、マテリアル(材質)とジオメトリ(形状)からなります。この2つの指定を変えることで、様々な表現が3D空間上で可能になります。
   */
  mesh: {
    components: ["MaterialContainer", "MeshRenderer"],
    super: "object"
  },
  /**
   * キャンバスの描画手法を指定するためのノード
   * キャンバス上の領域をどのように描画するかを示すためのノードです。gomlの読み込み時に一つも存在しない場合は、自動的にgoml直下に生成されます。
   * 1つ以上のレンダラーを含むことで、キャンバスの複数の領域をレンダリングしたりすることができるようになります。
   * また、この子要素に指定する`<render-XXX>`ノードなどによって、どのようにその領域を描画するかが決定されます。
   * 通常、`<renderer>`の子ノードに何も存在しない場合、自動的に`<render-scene>`タグが生成されます。
   */
  renderer: {
    components: ["Renderer"]
  },
  /**
   * 新しい形状を生成するためのノード
   * 単純な変形(`scale`、`position`、`rotation`だけで表せない)、例えば円の分割数などを指定したい別の形状を明示的に生成するためのノードです。
   */
  geometry: {
    components: ["Geometry"]
  },
  /**
   * テクスチャを明示的に読み込むためのノード
   * テクスチャを読み込むためのノードです。通常、テクスチャはurlをマテリアルに指定するなどして読み込まれますが、
   * サンプラの指定などをしたい場合、このタグで明示的に読み込むことにより読み込むことができます。
   */
  texture: {
    components: ["Texture"]
  },
  /**
   * マテリアルを明示的に読み込むためのノード
   * マテリアルを生成するためのノードです。メッシュからこのノードを参照して利用することにより、複数のメッシュで共通のマテリアルのインスタンスを参照させることができます。
   * これは、同時にマテリアルの値が編集できるだけでなく、パフォーマンス的にも大きな利点をもたらします。
   */
  material: {
    components: ["Material"]
  },
  /**
   * 新しいマテリアルを外部から読み込むためのノード
   * Grimoire.jsのマテリアルファイル(*.sort)から新しい種類のマテリアルを読み込むためのノードです。
   */
  "import-material": {
    components: ["MaterialImporter"]
  },
  /**
   * カラーバッファ用のテクスチャを生成するためのノード
   * `<renderer>`ノードの直下に含まれうるノードの一つです。
   * このノードによってレンダリングに用いるカラーバッファを生成することができます。
   * カラーバッファはオフスクリーンレンダリングなどへの利用など様々な面で利用することができます。
   */
  "texture-buffer": {
    components: ["TextureBuffer"]
  },
  /**
   * 深度バッファ/ステンシルバッファ用の`renderbuffer`を生成するためのノード
   * `<renderer>`ノードの直下に含まれうるノードの一つです。
   * このノードによってレンダリングに用いる深度バッファやステンシルバッファを生成することができます。
   */
  "render-buffer": {
    components: ["RenderBuffer"]
  },
  /**
   *
   * シーンを描画するレンダリング手順を表すためのノード
   * `<renderer>`ノードの直下に含まれうるノードの一つです。
   * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、シーンの内容を描画します。
   */
  "render-scene": {
    components: ["RenderScene","RenderHitArea"],
    default: {
      material: null
    }
  },
  /**
   * 四角形単体を特定のマテリアルで描画するためのノード
   * `<renderer>`ノードの直下に含まれうるノードの一つです。
   * このノードは`out`に指定されたテクスチャ(デフォルトではキャンバス自身)に対して、単純な四角形(`quad`)を指定されたマテリアルで描画します。
   */
  "render-quad": {
    components: ["MaterialContainer", "RenderQuad"],
    default: {
      material: null
    }
  }
};