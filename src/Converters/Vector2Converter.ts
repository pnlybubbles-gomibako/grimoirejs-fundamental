import gr from "grimoirejs";
import Attribute from "grimoirejs/ref/Node/Attribute";
import {Vector2} from "grimoirejs-math";
function Vector2Converter(this: Attribute, val: any): any {
  if (val instanceof Vector2) {
    return val;
  } else {
    return Vector2.parse(val);
  }
}

export default Vector2Converter;
