/*
 * Performs right-to-left function composition.
*/

export const compose = (...args) =>
  args.reduce((result, fn) =>
    (...args) => result(fn(...args)))
