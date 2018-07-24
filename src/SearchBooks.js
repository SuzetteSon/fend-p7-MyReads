import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query})
	}

	clearQuery = () => {
		this.setState({ query: '' })
	}

	render() {
		let showingBooks
		if (this.state.query) {
			const matchTitle = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.props.books.filter((book) => matchTitle.test(book.title))
		} else if (this.state.query) {
			const matchAuthors = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.props.books.filter((book) => matchAuthors.test(book.authors))
		} else {
			showingBooks = this.props.books
		}

		showingBooks.sort(sortBy('title'))

		return (
			<div>
			<div className="search-books">
			
		        <div className="search-books-bar">
		           	<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
		              <div className="search-books-input-wrapper">
		                {/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
		                <input 
		                	type="text" 
		                	placeholder="Search by title or author"
		                	value={this.state.query}
		                	onChange={(event) => this.updateQuery(event.target.value)}/>


		              </div>
		            </div>

		            
		          </div>
		          <div className="search-books-results">
		              	<ol className="books-grid">

		              		{showingBooks.map((book) => (
		              			<li key={book.id}>
		              				<div className="book">
		                    			<div className="book-top">
		                    				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
		                    					<div className="book-shelf-changer">
		                    						<select>
		                    							<option 
		                    								value="move" disabled>Move to...</option>
		                                				<option 
		                                					value="currentlyReading">Currently Reading</option>
						                                <option 
						                                	
						                                	value="wantToRead">Want to Read</option>
						                                {/*onClick={() => props.onMoveBookToWantToRead(book)}*/}
						                                <option 
						                                	value="read">Read</option>
						                                <option 
						                                	value="none">None</option>
						                    		</select>		
		                    					</div>

		                    			</div>
		                    		<div className="book-title">{book.title}</div>

		                          	<div className="book-authors">{book.authors}</div>
		                    		</div>
		              			</li>
		              			))}
		                    
		                    </ol>
		            </div>
		            </div>
			
			)
	}
}
SearchBooks.propTypes = {
	books: PropTypes.array.isRequired
}
export default SearchBooks