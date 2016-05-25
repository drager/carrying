import {expect} from 'chai'
import {nullAware} from '../src/nullAware'

/** @test {nullAware} */
describe('nullAware', () => {
  it('should return value if first parameter is null', () => {
    let x = null
    x = nullAware(x, 'are null-aware, friendly to')
    expect(x).to.equal('are null-aware, friendly to')
  })

  it('should return value if first parameter is undefined', () => {
    let x = undefined
    x = nullAware(x, 'are null-aware, friendly to')
    expect(x).to.equal('are null-aware, friendly to')
  })

  it('should return handle more types than strings', () => {
    expect(nullAware(null, {name: 'Aware'})).to.deep.equal({name: 'Aware'})
    expect(nullAware(null, 50)).to.equal(50)
    expect(nullAware(null, [1, 5, 10])).to.deep.equal([1, 5, 10])
  })

  it('should return the supposed to be null value if it is not null', () => {
    expect(nullAware(1, 'this will not be used')).to.equal(1)
  })
})
