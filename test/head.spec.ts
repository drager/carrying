import {expect} from 'chai'
import {head} from '../src/head'

describe('head', () => {
  it('should return the head of a list', () => {
    expect(head([1, 2, 3])).to.equal(1)
    expect(head([29, 10])).to.equal(29)
    expect(head([300])).to.equal(300)
  })

  it('should return undefined on an empty list', () => {
    expect(head([])).to.equal(undefined)
  })

  it('should return the head of a string', () => {
    expect(head('abc' as any)).to.equal('a')
    expect(head('ze' as any)).to.equal('z')
    expect(head('q' as any)).to.equal('q')
  })

  it('should return undefined on an empty string', () => {
    expect(head('' as any)).to.equal(undefined)
  })
})
