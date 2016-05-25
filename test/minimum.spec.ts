import {expect} from 'chai'
import {minimum} from '../src/minimum'

/** @test {minimum} */
describe('minimum', () => {
  it('should return the lowest element', () => {
    expect(minimum([1, 2, 3])).to.equal(1)
    expect(minimum([991, 10, 33])).to.equal(10)
  })

  it('should handle negative numbers', () => {
    expect(minimum([5, -10, 3])).to.equal(-10)
  })
})
