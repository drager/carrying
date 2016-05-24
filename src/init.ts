/**
 * Returns all the elements of a list except the last one.
 *
 * @since v0.1.0
 * @param {Array} list - The array
 * @return {Array} - All elements except the last one.
 * @example
 *   init([1, 2, 3]) // => [1, 2]
 *   init([29, 10]) // => [29]
 *   init([300]) // => [300]
 *
 *   init('abc') //=> ['a', 'b']
 *   init('ze') // => ['z']
 *   init('q') // => ['q']
 *   init('') //=> undefined
 */
export function init(list: any[]|string): any {
  if (list.length === 0) return undefined
  const results = []

  list.length > 1
    ? results.push(...list.slice(0, -1))
    : results.push(...list)

  return results
}
