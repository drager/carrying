/**
 * Returns the first element of the given list or string.
 *
 * @since v0.1.0
 * @param {Array|String} list
 * @return {any}
 * @example
 *   head(range(1, 11)) // => 1
 *   head([1, 2, 3]) //=> 1
 *   head([]) //=> undefined
 *
 *   head('abc') //=> 'c'
 *   head('ze') // => 'z'
 *   head('q') // => 'q'
 *   head('') //=> undefined
 */
export function head(list: any[]|string): any {
  return list[0]
}
