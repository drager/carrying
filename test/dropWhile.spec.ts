import {expect} from 'chai'
import {dropWhile} from '../src/dropWhile'

/** @test {dropWhile} */
describe('dropWhile', () => {
  it('should return the suffix remaining after takeWhile', () => {
    expect(dropWhile(a => a < 3, [1, 2, 3, 4, 5, 1, 2, 3])).to.deep.equal([3, 4, 5, 1, 2, 3])
    expect(dropWhile(a => a < 9, [1, 2, 3])).to.deep.equal([])
    expect(dropWhile(a => a < 0, [1, 2, 3])).to.deep.equal([1, 2, 3])
  })
})
