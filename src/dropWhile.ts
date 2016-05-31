import {takeWhile} from './takeWhile'

/**
 * Returns the suffix remaining after `takeWhile`.
 * @see takeWhile
 *
 * @since v0.1.0
 * @param {Function} fn - The predicate function
 * @param {Array} list - The list to go through
 * @return {Array}
 * @example
 *   dropWhile(a => a < 3, [1, 2, 3, 4, 5, 1, 2, 3]) => [3, 4, 5, 1, 2, 3]
 *   dropWhile(a => a < 9, [1, 2, 3]) // => []
 *   dropWhile(a => a < 0, [1, 2, 3]) // => [1, 2, 3]
 */
export function dropWhile(fn: Function, list: any[]): any {
  return list.filter((element, index) => takeWhile(fn, list)[index] !== list[index])
}
