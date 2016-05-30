import {expect} from 'chai'
import {splitAt} from '../src/splitAt'

/** @test {splitAt} */
describe('splitAt', () => {
  it('should split a string', () => {
    expect(splitAt(6, "Hello World!")).to.deep.equal(["Hello ", "World!"])
  })

  it('should split a list', () => {
    expect(splitAt(3, [1, 2, 3, 4, 5])).to.deep.equal([[1, 2, 3], [4, 5]])
    expect(splitAt(1, [1, 2, 3])).to.deep.equal([[1], [2, 3]])
    expect(splitAt(3, [1, 2, 3])).to.deep.equal([[1, 2, 3], []])
    expect(splitAt(4, [1, 2, 3])).to.deep.equal([[1, 2, 3], []])
  })

  it('should split on zero position', () => {
    expect(splitAt(0, [1, 2, 3])).to.deep.equal([[], [1, 2, 3]])
  })

  it('should split on negative position', () => {
    expect(splitAt(-1, [1, 2, 3])).to.deep.equal([[], [1, 2, 3]])
  })
})
