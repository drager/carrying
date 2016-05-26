import {expect} from 'chai'
import {range} from '../src/range'
import {takeWhile} from '../src/takeWhile'

/** @test {takeWhile} */
describe('takeWhile', () => {
  it('should takeWhile', () => {
    const lessThanThree = a => a < 3
    const lessThanNine = a => a < 9
    const lessThanZero = a => a < 0
    expect(takeWhile(lessThanThree, [1, 2, 3, 4, 1, 2, 3, 4])).to.deep.equal([1, 2])
    expect(takeWhile(lessThanNine, [1, 2, 3])).to.deep.equal([1, 2, 3])
    expect(takeWhile(lessThanZero, [1, 2, 3])).to.deep.equal([])
  })
})
