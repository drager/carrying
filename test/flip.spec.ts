import {expect} from 'chai'
import {flip} from '../src/flip'

describe('flip', () => {
  it('should reverse the arguments', () => {
    const mergeThree = (a, b, c) => [].concat(a, b, c)

    const result = flip(mergeThree)(1, 2, 3)
    expect(result).to.deep.equal([2, 1, 3])
  })
})
