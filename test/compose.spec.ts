import {expect} from 'chai'
import {compose} from '../src/compose'

/** @test {compose} */
describe('compose', () => {
  it('should return a function', () => {
    const f = compose(
      () => {}
    )

    expect(f).to.be.an.instanceof(Function)
  })

  it('should be able to compose three functions', () => {
    const f = compose(
      a => a + 1,
      a => -a,
      Math.pow
    )

    expect(f(3, 4)).to.equal(-80)
  })
})
