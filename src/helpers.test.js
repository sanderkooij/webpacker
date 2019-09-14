// @flow
import {
  square,
  pickValues,
  fromPairs,
  useEventListener,
  preventDefault,
} from './helpers'

describe('square', () => {
  it('should calculate the square of the given input', () => {
    expect(square(2)).toEqual(4)
  })
})

describe('pickValues', () => {
  it('should pick the correct values', () => {
    expect(pickValues({ a: 1, b: 2, c: 3 }, ['a'])).toEqual([1])
    expect(pickValues({ a: 1, b: 2, c: 3 }, ['a', 'b'])).toEqual([1, 2])
  })
})

describe('fromPairs', () => {
  it('should create an object from the passed key/value pairs', () => {
    expect(fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 })
  })
})

describe('preventDefault', () => {
  it('Should correctly call preventDefault on the passed event object', () => {
    const event = new Event('mocked')
    jest.spyOn(event, 'preventDefault')
    const result = preventDefault(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(result).toEqual(event)
  })
})

describe('useEventListener', () => {
  const element = document.createElement('a')
  const mockedHandler = jest.fn()
  const addEventListenerSpy = jest.spyOn(element, 'addEventListener')
  const removeEventListenerSpy = jest.spyOn(element, 'removeEventListener')
  const cleanUpEventListener = useEventListener('click', element)(mockedHandler)

  it('Should call addEventListener with the passed handler', () => {
    expect(addEventListenerSpy).toHaveBeenCalledWith('click', mockedHandler)
  })

  it('Should correctly call the handler when the event is fired', () => {
    element.click()
    expect(mockedHandler).toHaveBeenCalled()
  })

  it('Should call removeEventListener with the passed handler', () => {
    cleanUpEventListener()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('click', mockedHandler)
  })
})
