import {expect} from 'chai'
import {transpose} from '../src/transpose'

/** @test {transpose} */
describe('transpose', () => {
  it('should transpose the rows and the columns', () => {
    expect(transpose([[1, 2, 3], [4, 5, 6]])).to.deep.equal([[1, 4], [2, 5], [3, 6]])
  })

  it('should transpose if some rows are shorter than the others and skip them', () => {
    expect(transpose([[10, 11], [20], [], [30, 31, 32]])).to.deep.equal([[10, 20, 30], [11, 31], [32]])
  })
})
