import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	state = {
		query: '',
		searchBooks: [],
		searchError: false
	}

	updateQuery = (event) => {
		const query = event.target.value
		this.setState({ query: query})

		// if query = true, search method from API. If books available in search, setState to searchBooks array
		if (query) {
			BooksAPI.search(query).then((books) => {
	      		books.length > 0 ? this.setState({searchBooks: books, searchError: false}) : this.setState({searchBooks: [], searchError: true})
	    	})
		} else this.setState({searchBooks: [], searchError: false})
	}

	render() {
		//new array of searchBooks for search functionality
		let showingSearchBooks
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i') // regExp for search functionality
			showingSearchBooks = this.state.searchBooks.filter((book) => match.test(book.title))
		} else if (this.state.query) {
			const matchAuthors = new RegExp(escapeRegExp(this.state.query), 'i')
			showingSearchBooks = this.state.searchBooks.filter((book) => matchAuthors.test(book.authors))
		} else {
			showingSearchBooks = this.state.searchBooks
		}
		//sort the new array
		showingSearchBooks.sort(sortBy('name'))
		

		return (
			<div>
				<div className="search-books">
			        <div className="search-books-bar">
			    {/* Link to move back to main page */}
			           	<Link to="/" className="close-search"></Link>
			              <div className="search-books-input-wrapper">
			                <input 
			                	type="text" 
			                	placeholder="Search by title or author"
			                	value={this.state.query}
			                	onChange={this.updateQuery}/>
			              </div>
		            </div>  
		          </div>

		          <div className="search-books-results">
		          	{showingSearchBooks.length > 0 && (
		          		<div>
		          			<div>
		          			<h3>{showingSearchBooks.length} results returned </h3>
		          			</div>
		          			{/* ordered list to render books in  */}
				          		<ol className='books-grid'>
				              		{showingSearchBooks.map((book) => (
				              			<Book
				              				book={book}
				              				books={this.props.books}
				              				key={book.id}
				              				moveBook={ this.props.moveBook }
				              				/>
				              			))}
				                </ol>
		                    </div>
		            )}
		            {this.state.searchError && (
		            	<div>
		            		<div>
		            		<h3>Oops! No results found.</h3>
		            		</div>
		            	</div>
		            	)}
		            </div>
		    </div>
		)
	}
}

export default SearchBooks