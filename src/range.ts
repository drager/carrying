import {curry} from './curry'
/**
 * Produces an list in the given range.
 *
 * @since v0.1.0
 * @param {number} start - The start value for the range
 * @param {number} stop - The stop value for the range
 * @param {number} [step] - A optional step value
 * @return {Array} Either value or replaceValue
 * @example
 *   range(1, 3) // => [1, 2]
 *   range(5, 11) // => [5, 6, 7, 8, 9, 10]
 *
 *   range(10, 9) // => []
 *   range(2, 2) // => []
 *
 *   range(1, 10, 2) // => [1, 3, 5, 7, 9]
 */
export function range(start: number, stop: number, step?: number): any[] {
  return step
    ? iterate(start, stop, step)([])
    : iterate(start, stop, 1)([])
}

const iterate = curry((start, stop, step, list) => {
  const newList = [...list]
  for (let i = start; i < stop; i +=step) {
    newList.push(i)
  }
  return newList
})
