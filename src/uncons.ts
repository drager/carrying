import {head} from './head'
import {tail} from './tail'

/**
 * Decomposes a list into its head and tail.
 *
 * @since v0.1.0
 * @param {Array|String} list
 * @return {Array}
 * @example
 *   uncons(range(1, 11)) // => [[1], [2, 3, 4, 5, 6, 7, 8, 9, 10]]
 *   uncons([1, 2, 3]) //=> [[1], [2, 3]]
 *   uncons([]) //=> undefined
 *
 *   uncons('abc') //=> [['a'], ['b', 'c']]
 *   uncons('ze') // => [['z'], ['e']]
 *   uncons('q') // => ['q']
 *   uncons('') //=> undefined
 */
export function uncons(list: any[]|string): any {
  if (list.length === 0) return undefined
  return list.length > 1
    ? [[head(list)], [...tail(list)]]
    : [...list]
}
