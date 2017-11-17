import Attribute from "grimoirejs/ref/Node/Attribute";
/**
 * マテリアルを指定するためのコンバーター
 * `<material>へのクエリ`が指定された場合は、そのクエリによって検索された先頭の`<material>`を用いる。
 * `new(マテリアル名)`が指定された場合は、新しいマテリアルのインスタンスを生成して用いる。
 * 通常、マテリアルを指定するコンポーネントはマテリアルによって、そのコンポーネントが所持する属性が置き換わる。
 * `new(マテリアル)`名で指定した場合、そのコンポーネント自身がマテリアルの属性を管理することになるので注意が必要。
 */
export default function MaterialConverter(val: any, attr: Attribute): any;
