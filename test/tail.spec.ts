import {expect} from 'chai'
import {range} from '../src/range'
import {tail} from '../src/tail'

/** @test {tail} */
describe('tail', () => {
  it('should return the tail of a list', () => {
    expect(tail(range(1, 11))).to.deep.equal([2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(tail([1, 2, 3])).to.deep.equal([2, 3])
    expect(tail([29, 10])).to.deep.equal([10])
    expect(tail([300])).to.deep.equal([300])
  })

  it('should return undefined on an empty list', () => {
    expect(tail([])).to.be.undefined
  })

  it('should return the tail of a string', () => {
    expect(tail('abc')).to.deep.equal(['b', 'c'])
    expect(tail('ze')).to.deep.equal(['e'])
    expect(tail('q')).to.deep.equal(['q'])
  })

  it('should return undefined on an empty string', () => {
    expect(tail('')).to.be.undefined
  })
})
