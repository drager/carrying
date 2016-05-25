/**
 * Returns the lowest element.
 *
 * @since v0.1.0
 * @param {Array} list - The array of numbers
 * @return {Number} The lowest number
 * @example
 *   minimum([1, 2, 3]) // => 1
 *   minimum([991, 10, 33]) // => 10
 *
 *   minimum([5, -10, 3]) // => -10
 */
export function minimum(list: [number]): number {
  let lowest

  for (let i = 0; i < list.length; i += 1) {
    if (typeof lowest === 'undefined' || list[i] < lowest) {
      lowest = list[i]
    }
  }

  return lowest
}
