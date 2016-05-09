import {head} from './head'

/**
 * Extracts the elements after the head of a list.
 *
 * @function
 * @since v0.1.0
 * @param {Array} list - The array
 * @return {Array} - The tail of the list
 * @example
 *   tail(range(1, 11)) // => [2, 3, 4, 5, 6, 7, 8, 9, 10]
 *   tail([1, 2, 3]) // => [2, 3]
 *   tail([29, 10]) // => [10]
 *   tail([300]) // => [300]
 *   tail([]) //=> undefined
 *
 *   tail('abc') // => ['b, c']
 *   tail('ze') // => ['e']
 *   tail('q') // => ['q']
 *   tail('') //=> undefined
 */
export const tail = list => {
  if (list.length === 0) return undefined
  const results = []

  list.length > 1
    ? results.push(...list.slice(1))
    : results.push(...list)

  return results
}
