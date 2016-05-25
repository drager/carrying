/**
 * The concatenation of all the elements of a list.
 *
 * @since v0.1.0
 * @param {Array} list
 * @return {Array}
 * @example
 *   concat([[4, 5, 6], [1, 2, 3]]) // => [4, 5, 6, 1, 2, 3]
 *
 *   concat(intersperse(' ', ['intersperse', 'is', 'a', 'fun', 'function', '!']))) // =>
 *     'intersperse is a fun function !'
 */
export function concat(list: any[]): any {
  return list.reduce((a, b) => a.concat(b))
}
