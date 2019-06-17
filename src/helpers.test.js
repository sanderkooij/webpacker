// @flow
import {
  square,
  pickValues,
  fromPairs,
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
    preventDefault(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })
})
