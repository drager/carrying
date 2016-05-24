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
    expect(nullAware(null, {name: 'Aware'}), {name: 'Aware'})
    expect(nullAware(null, 50), 50)
    expect(nullAware(null, [1, 5, 10]), [1, 5, 10])
  })
})
