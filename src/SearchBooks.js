import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	static propTypes = {
		//books: PropTypes.array.isRequired,
		books: PropTypes.array.isRequired
	}

	state = {
		query: '',
		searchBooks: [],
		searchError: false
	}

	updateQuery = (event) => {
		const query = event.target.value
		this.setState({ query: query})

		// if query = true, search...
		if (query) {
			BooksAPI.search(query).then((books) => {
	      		books.length > 0 ? this.setState({searchBooks: books, searchError: false}) : this.setState({ searchBooks: [], searchError: true})
	    	})
		} else this.setState({ searchBooks: [], searchError: false})
	}

	clearQuery = () => {
		this.setState({ query: '' })
	}

	render() {

		let showingSearchBooks
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingSearchBooks = this.state.searchBooks.filter((book) => match.test(book.title))
			// not sure if the following is working...
		} else if (this.state.query) {
			const matchAuthors = new RegExp(escapeRegExp(this.state.query), 'i')
			showingSearchBooks = this.state.searchBooks.filter((book) => matchAuthors.test(book.authors))
		} else {
			showingSearchBooks = this.state.searchBooks
		}

		showingSearchBooks.sort(sortBy('name'))
		

		return (
			<div>
			<div className="search-books">
			
		        <div className="search-books-bar">
		           	<Link to="/" className="close-search">Close</Link>
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
		          		<ol className='books-grid'>
		              		{showingSearchBooks.map((book) => (
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
		            )}
		            { this.state.searchError && (
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