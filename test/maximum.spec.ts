import {expect} from 'chai'
import {maximum} from '../src/maximum'

/** @test {maximum} */
describe('maximum', () => {
  it('should return the largest element', () => {
    expect(maximum([1, 2, 3])).to.equal(3)
    expect(maximum([991, 10, 33])).to.equal(991)
  })

  it('should handle negative numbers', () => {
    expect(maximum([5, -10, 3])).to.equal(5)
  })
})
