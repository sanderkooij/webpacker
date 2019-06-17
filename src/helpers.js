// @flow
export function square(value: number): number {
  return value * value
}
// { key: value }, [key, key] => [value, value]
export function pickValues(
  obj: { [string | number ]: string | number },
  keys: Array<string | number>,
): Array<string | number> {
  return keys.map(key => obj[key])
}

// [[key, value], [key, value]]
export function fromPairs(
  arr: Array<[string | number, string | number]>,
) {
  return arr.reduce((acc, value) => ({ ...acc, [value[0]]: value[1] }), {})
}

/* istanbul ignore next */
export function treeshakeMe(arg: any): any {
  return arg
}
