import gr from "grimoirejs";
import Attribute from "grimoirejs/ref/Node/Attribute";
import Component from "grimoirejs/ref/Node/Component";
import GomlNode from "grimoirejs/ref/Node/GomlNode";


function ComponentConverter(this: Attribute, val: any): any {
  if (!this.declaration["target"]) {
    throw new Error("Component converter require to be specified target");
  }
  if (val instanceof GomlNode) {
    return (val as GomlNode).getComponent(this.declaration["target"]);
  } else if (val instanceof Component) {
    if ((val as Component).name === this.declaration["target"]) {
      return val; // check component type?
    } else {
      throw new Error(`Specified component must be ${this.declaration["target"]}`);
    }
  } else {
    return this.tree(val)(this.declaration["target"]).get(0, 0, 0);
  }
}

export default ComponentConverter;
