import {expect} from 'chai'
import {intersperse} from '../src/intersperse'
import {concat} from '../src/concat'

/** @test {concat} */
describe('concat', () => {
  it('should concatenation all the elements of a list', () => {
    expect(concat([[4, 5, 6], [1, 2, 3]])).to.deep.equal([4, 5, 6, 1, 2, 3])

    expect(concat(intersperse(' ', ['intersperse', 'is', 'a', 'fun', 'function', '!'])))
      .to.equal('intersperse is a fun function !')
  })
})
