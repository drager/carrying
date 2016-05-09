import {expect} from 'chai'
import {sum} from '../src/sum'

/** @test {sum} */
describe('sum', () => {
  it('should summarize list of numbers', () => {
    expect(sum([1, 2, 3])).to.equal(6)
  })

  it('should not remember the state of the accumulator', () => {
    expect(sum([1, 2, 3])).to.equal(6)
    expect(sum([1])).to.equal(1)
    expect(sum([10, 33, 991])).to.equal(1034)
  })

  it('should handle negative numbers', () => {
    expect(sum([5, -10, 3])).to.equal(-2)
  })
})
