/**
 * Map a function over the concatenation of all the elements of a list.
 *
 * @since v0.1.0
 * @param {Function} fn - The function to be mapped
 * @param {Array} list - The list to concatenate
 * @return {Array}
 * @example
 *   concatMap(a => a * 2, [[4, 5, 6], [1, 2, 3]]) // => [8, 10, 12, 2, 4, 6]
 */
export function concatMap(fn: Function, list: any[]): any {
  return list.reduce((a, b) => a.concat(b)).map(l => fn(l))
}
