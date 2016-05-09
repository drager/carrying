/**
 * Extract the last element of a list.
 *
 * @function
 * @since v0.1.0
 * @param {Array} list - The array
 * @return {Array} - The last element of the list
 * @example
 *   last([1, 2, 3]) // => 3
 *   last([29, 10]) // => 10
 *   last([300]) // => 300
 *
 *   last('abc') //=> 'c'
 *   last('ze') // => 'e'
 *   last('q') // => 'q'
 *   last('') //=> undefined
 */
export const last = (list: any[]|string): any => list[list.length - 1]
