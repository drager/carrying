/**
 * Takes two lists and returns a list of corresponding pairs.
 *
 * @function
 * @since v0.1.0
 * @param {Array} left - The left (first) array
 * @param {Array} right - The right (second) array
 * @param {Function} combinerFunction? - A optional combiner function
 * @return {Array} Returns a list of corresponding pairs
 * @example
 *   range(1, 3) // => [1, 2]
 *   zip([0, 5], [1, 10]) // => [[0, 1], [5, 10]]
 *
 *   const books = [
 *     {id: 1, name: 'The old man and the Sea'},
 *     {id: 2, name: 'Harry Potter and the Chamber of Secrets'},
 *     {id: 3, name: 'Jane Eyre'}
 *   ]
 *   const ratings = [{id: 1, rating: 4.1}, {id: 2, rating: 3.3}, {id: 3, rating: 5.0}]
 *   zip(books, ratings, (book, rating) => {
 *     return {bookId: book.id, ratingId: rating.id}
 *   }) // => [{bookId: 1, ratingId: 1}], [{bookId: 2, ratingId: 2}], [{bookId: 3, ratingId: 3}]
 */
export const zip = (left: any[], right: any[], combinerFunction?: Function): any[] => {
  const results = []

  for (let i = 0; i < Math.min(left.length, right.length); i += 1) {
    combinerFunction
      ? results.push([combinerFunction(left[i], right[i])])
      : results.push([left[i], right[i]])
  }

  return results
}
