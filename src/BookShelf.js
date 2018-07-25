import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	render () {

		return (
			<ol className="books-grid">
		        {this.props.books.map((book) => (
		        	<Book
		        		book={book}
		        		books={this.props.books}
		        		key={book.id}
		        		moveBook={this.props.moveBook}
		        		/>
		        	))}
								                    
			</ol>
			)
	}
}
export default BookShelf