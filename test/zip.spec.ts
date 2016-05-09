import {expect} from 'chai'
import {zip} from '../src/zip'

describe('zip', () => {
  it('should return the first item in each array in one array and the second in another', () => {
    expect(zip([0, 5], [1, 10])).to.deep.equal([[0, 1], [5, 10]])
  })

  it('should apply combinerFunction if provided', () => {
    const books = [
      {id: 1, name: 'The old man and the Sea'},
      {id: 2, name: 'Harry Potter and the Chamber of Secrets'},
      {id: 3, name: 'Jane Eyre'}
    ]
    const ratings = [{id: 1, rating: 4.1}, {id: 2, rating: 3.3}, {id: 3, rating: 5.0}]
    const result = zip(books, ratings, (book, rating) => {
			return {bookId: book.id, ratingId: rating.id}
    })
    expect(result).to.deep.equal([
      [{bookId: 1, ratingId: 1}], [{bookId: 2, ratingId: 2}], [{bookId: 3, ratingId: 3}]
    ])
  })
})
