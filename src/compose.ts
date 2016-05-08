/**
 * Performs right-to-left function composition.
 *
 * @function
 * @since v0.1.0
 * @param {any} ...args
 * @return {Function}
 * @example
 *   const f = compose(a => a + 1, a => -a, Math.pow)
 *   f(3, 4) //=> -80
 */
export const compose = (...args): Function =>
  args.reduce((result, fn) =>
    (...args) => result(fn(...args)))
