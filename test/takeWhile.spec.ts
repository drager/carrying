import {expect} from 'chai'
import {takeWhile} from '../src/takeWhile'

/** @test {takeWhile} */
describe('takeWhile', () => {
  it('should return the elements that satisfies the provided predicate function', () => {
    expect(takeWhile(a => a < 3, [1, 2, 3, 4, 1, 2, 3, 4])).to.deep.equal([1, 2])
    expect(takeWhile(a => a < 9, [1, 2, 3])).to.deep.equal([1, 2, 3])
    expect(takeWhile(a => a < 0, [1, 2, 3])).to.deep.equal([])
  })
})
