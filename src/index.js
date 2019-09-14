import {
  pipe,
  square,
  iterableToPairs,
  fromPairs,
  pickValues,
  useEventListener,
  useFormData,
  preventDefault,
} from './helpers'

const result = document.getElementById('result')

function handleResultDOMupdate(values) {
  const input = pickValues(values, ['demo_number_input'])[0]
  result.textContent = `The square of ${input} is ${square(input)}`
}

const extractValuesAsFormData = useFormData(FormData)

useEventListener('submit', document)(
  pipe(
    preventDefault,
    extractValuesAsFormData,
    iterableToPairs,
    fromPairs,
    handleResultDOMupdate,
  ),
)
