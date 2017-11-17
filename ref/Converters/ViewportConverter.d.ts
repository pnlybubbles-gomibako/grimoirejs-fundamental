/**
 * ビューポートサイズを設定するためのコンバーター
 * `auto`・・・親のキャンバスのサイズにあったビューポートサイズを返す
 * `左端,上端,幅,高さ`・・・キャンバスのサイズを具体的に指定する。
 * 数値を指定するとピクセル単位になるが、数値に%をつければ親のキャンバス基準での比率指定ができる。
 */
export default function ViewportConverter(val: any): any;
