/**
 * Returns a function that is like the original function,
 * only the first two arguments are flipped.
 *
 * @since v0.1.0
 * @param {Function} fn
 * @return {Function}
 * @example
 *   const merge = (a, b) => [].concat(a, b)
 *   flip(merge)(1, 2) // => [2, 1]
 */
export function flip(fn: Function): Function {
  return (y: any, x: any, ...args): Function => fn(x, y, args)
}
