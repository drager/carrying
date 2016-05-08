/**
 * Returns a function that is like the original function,
 * only the first two arguments are flipped
 */
export const flip = (fn: Function): Function =>
  (y: any, x: any, ...args): Function => fn(x, y, args)
