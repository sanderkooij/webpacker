import {
  square,
  pickValues,
  fromPairs,
  preventDefault,
} from './helpers'

const form = document.getElementById('demo')
const result = document.getElementById('result')

function handleSubmit(event) {
  const input = pickValues(
    fromPairs(
      [...new FormData(event.target)],
    ),
    ['demo_number_input'],
  )[0]

  result.textContent = `The square of ${input} is ${square(input)}`
}

form.addEventListener('submit', preventDefault)
form.addEventListener('submit', handleSubmit)
