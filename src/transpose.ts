/**
 * Transposes the rows and the columns.
 *
 * @since v0.1.0
 * @param {Array} list
 * @return {Array}
 * @example
 *   transpose([[1, 2, 3], [4, 5, 6]]) // => [[1, 4], [2, 5], [3, 6]]
 *
 *   transpose([[10, 11], [20], [], [30, 31, 32]]) // => [[10, 20, 30], [11, 31], [32]]
 */
export function transpose(list: any[]): any {
  if (list.length === 0) return undefined
  const indices = {}

  list.map(l =>
    l.reduce((obj, current, index) => {
      if (!(index in indices)) {
        indices[index] = []
      }
      indices[index].push(current)
      return obj
    }, [])
  )

  return Object.values(indices)
}
