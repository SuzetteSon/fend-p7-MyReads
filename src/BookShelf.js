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
			<div>
		{/* ordered list to render books to */}
				<ol className="books-grid">
			{/* map through books array and render books */}
			        {this.props.books.map((book) => (
			        	<Book
			        		book={book}
			        		books={this.props.books}
			        		key={book.id}
			        		moveBook={this.props.moveBook}
			        		/>
			        	))}			                    
				</ol>
			</div>
		)
	}
}

export default BookShelf