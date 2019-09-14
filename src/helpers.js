// @flow
type EventType = 'click' | 'submit'

export function pipe(...fns: any[]) {
  return (x: any) => fns.reduce((prev, func) => func(prev), x)
}

export function square(value: number): number {
  return value * value
}

export function pickValues(
  obj: Object,
  keys: Array<string>,
): Array<string | number | boolean> {
  function pickValue(key) {
    return obj[key]
  }

  return keys.map(pickValue)
}

export function fromPairs(
  arr: Array<[string | number, string | number | boolean]>,
) {
  return arr.reduce((acc, value) => ({ ...acc, [value[0]]: value[1] }), {})
}

export function preventDefault(event: Event) {
  event.preventDefault()
  return event
}

export function useEventListener(type: EventType, element: HTMLElement) {
  function useEventListenerAttach(handler: any) {
    element.addEventListener(type, handler)

    function useEventListenerCleanUp() {
      element.removeEventListener(type, handler)
    }

    return useEventListenerCleanUp
  }

  return useEventListenerAttach
}

export function useFormData(constructor: any): any {
  function toIterableFormData(event: Event): FormData {
    return new constructor(event.target)
  }

  return toIterableFormData
}

export function iterableToPairs(iterable: any) {
  return [...iterable]
}
