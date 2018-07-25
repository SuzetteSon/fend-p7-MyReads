import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShelfOptions from './ShelfOptions'

class Book extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	render() {

		return (

			<div>
				<li key={this.props.book.id}>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${this.props.book.imageLinks.smallThumbnail})`}}></div>
									<ShelfOptions
										book={this.props.book}
										books={this.props.books}
										moveBook={this.props.moveBook}

										/>
								
						</div>
					</div>
						<div className="book-title">{this.props.book.title}</div>
						<div className="book-authors">{this.props.book.authors}</div>
						<div>{console.log(this.props.book)}</div>
				</li>
			</div>
		)
	}
}
export default Book