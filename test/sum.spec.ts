import {expect} from 'chai'
import {sum} from '../src/sum'

describe('sum', () => {
  it('should summarize list of numbers', () => {
    const result = sum([1, 2, 3])
    expect(result).to.equal(6)
  })

  it('should not remember the state of the accumulator', () => {
    const result = sum([1, 2, 3])
    expect(result).to.equal(6)

    const result2 = sum([1])
    expect(result2).to.equal(1)

    const result3 = sum([10, 33, 991])
    expect(result3).to.equal(1034)
  })

  it('should handle negative numbers', () => {
    const result = sum([5, -10, 3])
    expect(result).to.equal(-2)
  })
})
