// @flow
export function square(value: number): number {
  return value * value
}

export function pickValues(
  obj: { [string | number ]: string | number | boolean },
  keys: Array<string | number>,
): Array<string | number | boolean> {
  return keys.map(key => obj[key])
}

export function fromPairs(
  arr: Array<[string | number, string | number | boolean]>,
) {
  return arr.reduce((acc, value) => ({ ...acc, [value[0]]: value[1] }), {})
}

export function preventDefault(event: Event) {
  event.preventDefault()
}

/* istanbul ignore next */
export function treeshakeMe(arg: any): any {
  return arg
}
