/**
 * Returns the elements that satisfies the provided predicate function.
 *
 * @since v0.1.0
 * @param {Function} fn - The predicate function
 * @param {Array} list - The list to go through
 * @return {Array}
 * @example
 *   takeWhile(a => a < 3, [1, 2, 3, 4, 1, 2, 3, 4]) // => [1, 2]
 *   takeWhile(a => a < 9, [1, 2, 3]) // => [1, 2, 3]
 *   takeWhile(a => a < 0, [1, 2, 3]) // => []
 *
 */
export function takeWhile(fn: Function, list: any[]): any {
  const results = []
  list.map(element => {
    if (fn(element) && !results.includes(element)) {
      results.push(element)
    }
  })

  return results
}
