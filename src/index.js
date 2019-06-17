import {
  square,
  pickValues,
  fromPairs,
} from './helpers'

const form = document.getElementById('demo')
const result = document.getElementById('result')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const input = pickValues(
    fromPairs(
      [...new FormData(event.target)],
    ),
    ['demo_number_input'],
  )[0]

  result.innerHTML = `The square of ${input} is ${square(input)}`
})
