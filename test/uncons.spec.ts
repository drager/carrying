import {expect} from 'chai'
import {range} from '../src/range'
import {uncons} from '../src/uncons'

describe('uncons', () => {
  it('should decompose a list into its head and tail', () => {
    expect(uncons(range(1, 11))).to.deep.equal([[1], [2, 3, 4, 5, 6, 7, 8, 9, 10]])
    expect(uncons([1, 2, 3])).to.deep.equal([[1], [2, 3]])
    expect(uncons([29, 10])).to.deep.equal([[29], [10]])
    expect(uncons([300])).to.deep.equal([300])
  })

  it('should return undefined on an empty list', () => {
    expect(uncons([])).to.be.undefined
  })

  it('should decompose a string into its head and tail', () => {
    expect(uncons('abc' as any)).to.deep.equal([['a'], ['b', 'c']])
    expect(uncons('ze' as any)).to.deep.equal([['z'], ['e']])
    expect(uncons('q' as any)).to.deep.equal(['q'])
  })

  it('should return undefined on an empty string', () => {
    expect(uncons('' as any)).to.be.undefined
  })
})
