import {expect} from 'chai'
import {range} from '../src/range'

describe('range', () => {
  it('should produce a range between a start and stop', () => {
    expect(range(1, 3)).to.deep.equal([1, 2])
    expect(range(5, 11)).to.deep.equal([5, 6, 7, 8, 9, 10])
  })

  it('should return an empty list if start is bigger than stop', () => {
    expect(range(10, 9)).to.deep.equal([])
  })

  it('should return an empty list if start is equal to stop', () => {
    expect(range(2, 2)).to.deep.equal([])
  })

  it('should produce a range with a given step', () => {
    expect(range(1, 10, 2)).to.deep.equal([1, 3, 5, 7, 9])
  })
})
