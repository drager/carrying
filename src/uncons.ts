import {head} from './head'
import {tail} from './tail'

/**
 * Decomposes a list into its head and tail.
 *
 * @function
 * @since v0.1.0
 * @param {Array|String} list
 * @return {Array}
 * @example
 *   uncons(range(1, 11)) // => 1
 *   uncons([1, 2, 3]) //=> 1
 *   uncons([]) //=> undefined
 *
 *   uncons('abc') //=> 'c'
 *   uncons('ze') // => 'z'
 *   uncons('q') // => 'q'
 *   uncons('') //=> undefined
 */
export const uncons = list => {
  if (list.length === 0) return undefined
  return list.length > 1
    ? [[head(list)], [...tail(list)]]
    : [...list]
}
