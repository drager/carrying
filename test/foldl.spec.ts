import {expect} from 'chai'
import {foldl} from '../src/foldl'

/** @test {foldl} */
describe('foldl', () => {
  it('should apply the provided function', () => {
    const add = (prev, current) => prev + current
    expect(foldl(add)([1, 2, 3])).to.equal(6)
  })
})
