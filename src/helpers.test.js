import { square, treeshakeMe } from './helpers'

describe('Helpers', () => {
  it('square: ...', () => {
    expect(square(2)).toEqual(4)
  })

  it('multiply: ...', () => {
    expect(treeshakeMe(5)).toEqual(5)
  })
})
