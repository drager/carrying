/**
 * Summarizes the numbers of a given list.
 *
 * @function
 * @since v0.1.0
 * @param {Array} list - The array of numbers
 * @return {Number} The summarization of the numbers
 * @example
 *   sum([1, 2, 3]) // => 6
 *   sum([10, 33, 991]) // => 1034
 *
 *   sum([5, -10, 3]) // => -2
 */
export const sum = (list: [number]): number =>
  list.reduce((prev, curr) => prev + curr, 0)
