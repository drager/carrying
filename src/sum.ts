/**
 * Summarizes the numbers of a given list.
 *
 * @since v0.1.0
 * @param {Array} list - The array of numbers
 * @return {Number} The summarization of the numbers
 * @example
 *   sum([1, 2, 3]) // => 6
 *   sum([10, 33, 991]) // => 1034
 *
 *   sum([5, -10, 3]) // => -2
 */
export function sum(list: [number]): number {
  return list.reduce((prev, curr) => prev + curr, 0)
}
