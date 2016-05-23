import {head} from './head'
/**
 * Applies a function against an accumulator and each value of the list from left-to-right
 * to reduce it to a single value. (also known variously as reduce).
 *
 * @since v0.1.0
 * @param {Function} fn - The accumlating function, the function to
 * execute on each value in the array
 * @param {Array} list - The list we should accumlate
 * @param {any} accumlator -
 * @param {number} index -
 * @return {any}
 * @example
 *   const add = (prev, current) => prev + current
 *   foldl(add)([1, 2, 3]) // => 6
 */
export function foldl(fn: Function) {
  return (list: any[], accumulator = head(list), index = 0) => {
    let result
    if (index === list.length - 1) {
      result = accumulator
    } else {
      accumulator = fn(accumulator, list[index + 1])
      result = foldl(fn)(list, accumulator, index + 1)
    }

    return result
  }
}
