import {expect} from 'chai'
import {intersperse} from '../src/intersperse'

/** @test {intersperse} */
describe('intersperse', () => {
  it('should intersperse a element in a list', () => {
    expect(intersperse(' ', ['intersperse', 'is', 'a', 'fun', 'function', '!']))
      .to.deep.equal(['intersperse', ' ', 'is', ' ', 'a', ' ',  'fun', ' ',  'function', ' ',  '!'])
  })

  it('should intersperse a element in a string', () => {
    expect(intersperse(',', 'abcde')).to.equal('a,b,c,d,e')
  })
})
