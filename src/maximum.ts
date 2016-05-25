/**
 * Returns the largest element.
 *
 * @since v0.1.0
 * @param {Array} list - The array of numbers
 * @return {Number} The largest number
 * @example
 *   maximum([1, 2, 3]) // => 3
 *   maximum([991, 10, 33]) // => 991
 *
 *   maximum([5, -10, 3]) // => 5
 */
export function maximum(list: [number]): number {
  let largest

  for (let i = 0; i < list.length; i += 1) {
    if (typeof largest === 'undefined' || list[i] > largest) {
      largest = list[i]
    }
  }

  return largest
}
