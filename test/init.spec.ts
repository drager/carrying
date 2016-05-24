import {expect} from 'chai'
import {range} from '../src/range'
import {init} from '../src/init'

/** @test {init} */
describe('init', () => {
  it('should return all the elements of a list except the last one', () => {
    expect(init(range(1, 11))).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(init([1, 2, 3])).to.deep.equal([1, 2])
    expect(init([29, 10])).to.deep.equal([29])
    expect(init([300])).to.deep.equal([300])
  })

  it('should return undefined on an empty list', () => {
    expect(init([])).to.be.undefined
  })

  it('should return all the elements of a list except the last one of a string', () => {
    expect(init('abc')).to.deep.equal(['a', 'b'])
    expect(init('ze')).to.deep.equal(['z'])
    expect(init('q')).to.deep.equal(['q'])
  })

  it('should return undefined on an empty string', () => {
    expect(init('')).to.be.undefined
  })
})
