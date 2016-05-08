import {expect} from 'chai'
import {flip} from '../src/flip'

describe('flip', () => {
  it('should reverse the arguments', () => {
    const merge = (a, b) => [].concat(a, b)
    expect(flip(merge)(1, 2)).to.deep.equal([2, 1])
  })
})
