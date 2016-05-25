/**
 * Returns the product of the numbers of a list.
 *
 * @since v0.1.0
 * @param {Array} list - The array of numbers
 * @return {Number} The product of the numbers
 * @example
 *   product([1, 2, 3]) // => 6
 *   product([991, 10, 33]) // => 327030
 *
 *   product([5, -10, 3]) // => -150
 */
export function product(list: [number]): number {
  return list.reduce((prev, curr) => prev * curr, 1)
}
