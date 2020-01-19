export function pipe(...fns) {
  return (x) => fns.reduce((prev, func) => func(prev), x)
}

export function square(value) {
  return value * value
}

export function pickValues(obj, keys) {
  function pickValue(key) {
    return obj[key]
  }

  return keys.map(pickValue)
}

export function fromPairs(arr) {
  return arr.reduce((acc, value) => ({ ...acc, [value[0]]: value[1] }), {})
}

export function preventDefault(event) {
  event.preventDefault()
  return event
}

export function useEventListener(type, element) {
  function useEventListenerAttach(handler) {
    element.addEventListener(type, handler)

    function useEventListenerCleanUp() {
      element.removeEventListener(type, handler)
    }

    return useEventListenerCleanUp
  }

  return useEventListenerAttach
}

export function useFormData(constructor) {
  function toIterableFormData(event) {
    return new constructor(event.target)
  }

  return toIterableFormData
}

export function iterableToPairs(iterable) {
  return [...iterable]
}
