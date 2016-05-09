import {expect} from 'chai'
import {last} from '../src/last'

/** @test {last} */
describe('last', () => {
  it('should return the last element of a list', () => {
    expect(last([1, 2, 3])).to.equal(3)
    expect(last([29, 10])).to.equal(10)
    expect(last([300])).to.equal(300)
  })

  it('should return undefined on an empty list', () => {
    expect(last([])).to.equal(undefined)
  })

  it('should return the last character of a string', () => {
    expect(last('abc')).to.equal('c')
    expect(last('ze')).to.equal('e')
    expect(last('q')).to.equal('q')
  })

  it('should return undefined on an empty string', () => {
    expect(last('')).to.equal(undefined)
  })
})
