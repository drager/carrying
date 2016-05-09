import {curryN} from './curryN'

/**
 * Returns a curried variant of the provided function.
 *
 * @since v0.1.0
 * @param {Function} fn - The function to be curried
 * @return {Function} The curried function
 * @example
 *   const greeter = (greeting, name) => `${greeting} ${name}`
 *   const curriedGreeter = curry(greeter)
 *   const helloGreeting = curriedGreeter('Hello')
 *   helloGreeting('Buzz') // => 'Hello Buzz'
 *
 *   const add = (a, b) => a + b
 *   const curriedAdd = curry(add)
 *   const addThree = curriedAdd(3)
 *   addThree(50) // => 53
 */
export function curry(fn: Function): Function {
  return curryN(fn.length)(fn)
}
