import {expect} from 'chai'
import {head} from '../src/head'

/** @test {head} */
describe('head', () => {
  it('should return the head of a list', () => {
    expect(head([1, 2, 3])).to.equal(1)
    expect(head([29, 10])).to.equal(29)
    expect(head([300])).to.equal(300)
  })

  it('should return undefined on an empty list', () => {
    expect(head([])).to.be.undefined
  })

  it('should return the head of a string', () => {
    expect(head('abc')).to.equal('a')
    expect(head('ze')).to.equal('z')
    expect(head('q')).to.equal('q')
  })

  it('should return undefined on an empty string', () => {
    expect(head('')).to.be.undefined
  })
})
