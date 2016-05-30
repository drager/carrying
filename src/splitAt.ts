/**
 * Splits an array or string at a given position.
 *
 * @since v0.1.0
 * @param {Number} position - At the position it should split on
 * @param {Array} list - The array of items
 * @return {Array} An array with the splitted items
 * @example
 *   splitAt(6, "Hello World!") // => ["Hello ", "World!"]
 *
 *   splitAt(3, [1, 2, 3, 4, 5]) // => [[1, 2, 3], [4, 5]]
 *   splitAt(1, [1, 2, 3]) // => [[1], [2, 3]]
 *   splitAt(3, [1, 2, 3]) // => [[1, 2, 3], []]
 *   splitAt(4, [1, 2, 3]) // => [[1, 2, 3], []]
 *
 *   splitAt(0, [1, 2, 3]) // => [[], [1, 2, 3]]
 *
 *   splitAt(-1, [1, 2, 3]) // => [[], [1, 2, 3]]
 */
export function splitAt(position: number, list: string|any[]): any {
  if (typeof list === 'string') {
    return [list.substring(0, position), list.substring(position)]
  }
  return position < 0
    ? [[], list.slice(0)]
    : [list.slice(0, position), list.slice(position)]
}
