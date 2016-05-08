import {expect} from 'chai'
import {curry} from '../src/curry'

describe('curry', () => {
  it('should return a curried function', () => {
    const greeter = (greeting, name) => `${greeting} ${name}`
    const curriedGreeter = curry(greeter)
    const helloGreeting = curriedGreeter('Hello')
    expect(helloGreeting('Buzz')).to.equal('Hello Buzz')
  })

  it('should return another curried function', () => {
    const add = (a, b) => a + b

    const curriedAdd = curry(add)
    const addThree = curriedAdd(3)
    expect(addThree(50)).to.equal(53)
  })
})
