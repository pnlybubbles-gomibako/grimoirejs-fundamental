import ITransformingArgument from "./ITransformingArgument";
function _removeVariableAnnotations(source: string): string {
  let regexResult: RegExpExecArray;
  while (regexResult = /@\{.+\}/g.exec(source)) {
    source = source.substr(0, regexResult.index) + source.substring(regexResult.index + regexResult[0].length, source.length);
  }
  return source;
}

export default async function(input: ITransformingArgument): Promise<ITransformingArgument> {
  input.info.shaderSource = _removeVariableAnnotations(input.info.shaderSource);
  return input;
}
