import sayHelloTo from '.'

describe('sayHello', () => {
  it('Should return a string..', () => {
    const result = sayHelloTo('Jim')
    const expected = 'Hello Jim!'
    expect(result).toEqual(expected)
  })
})
