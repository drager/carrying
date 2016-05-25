import {expect} from 'chai'
import {product} from '../src/product'

/** @test {product} */
describe('product', () => {
  it('should return the product of a list of numbers', () => {
    expect(product([1, 2, 3])).to.equal(6)
  })

  it('should not remember the state of the accumulator', () => {
    expect(product([1, 2, 3])).to.equal(6)
    expect(product([1])).to.equal(1)
    expect(product([10, 33, 991])).to.equal(327030)
  })

  it('should handle negative numbers', () => {
    expect(product([5, -10, 3])).to.equal(-150)
  })
})
