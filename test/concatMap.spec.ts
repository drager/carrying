import {expect} from 'chai'
import {intersperse} from '../src/intersperse'
import {concatMap} from '../src/concatMap'

/** @test {concatMap} */
describe('concatMap', () => {
  it('should apply the function on all the elements and concatenate it', () => {
    expect(concatMap(a => a * 2, [[4, 5, 6], [1, 2, 3]])).to.deep.equal([8, 10, 12, 2, 4, 6])
  })
})
