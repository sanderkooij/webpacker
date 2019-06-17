// Quick mock since we are in control here and it's just an example.
// This pattern is not really suited for larger applications. Use for example the flux pattern
// and unidirectional data flow if you are building scalable applications.
import {
  square,
  fromPairs,
  pickValues,
  preventDefault,
} from './helpers'

const result = document.getElementById('result')

function handleSubmit(event) {
  // Dispatch a custom event that we can listen to.
  event.target.dispatchEvent(new CustomEvent('calculated', {
    // Let the event propogate up the DOM tree so we can catch it on the document.
    bubbles: true,
    // eg: payload.
    detail: {
      // Creates a { name: value } representation/payload of the form.
      ...fromPairs(
        // We love the spread operator.
        // Spreads into a [ [input_name, input_value], ...].
        [...new FormData(event.target)],
      ),
    },
  }))
}

function handleResultDOMupdate({ detail }) {
  // Because it's immutable, and functional and it looks cool!
  // This needs improvement though. How can we decouple the hard coded names here. :)
  const input = pickValues(detail, ['demo_number_input'])[0]
  // We are just updating the texnode we are not adding elements.
  result.textContent = `The square of ${input} is ${square(input)}`
}

document.addEventListener('submit', preventDefault)
document.addEventListener('submit', handleSubmit)
document.addEventListener('calculated', handleResultDOMupdate)
