import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		shelfMove: false 
	}

	// function to move a book to "Want to Read" shelf

	moveToShelf = (book) => {
	    // base new state of component on the current state
	    this.setState((state) => ({
	      books: state.books.filter((b) => b.id !== book.id)
	    }))
	    BooksAPI.update(book, this.state.shelf)
	}

	render() {

		const bookShelf = [
			{ type: 'currentlyReading', name: 'Currently Reading'},
			{ type: 'wantToRead', name: 'Want To Read'},
			{ type: 'read', name: 'Read'}
			]

		return (
		    <div className="app">  
		          <div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		          </div>

		            <div className="list-books-content">
		        {/* map bookshelves to render */}
		        		{bookShelf.map((shelf, index) => {
		        			this.props.books.filter( book => book.shelf === shelf.type)
		        			return (
		        				<div className="bookshelf" key={index}>
		        					<h2 className="bookshelf-title">{shelf.name}</h2>
		        						<div className="bookshelf-books">
		        							<ol className="books-grid">
		        						{/* if book.shelf === shelf type, map...*/}

								                    {this.props.books.map((book) => (
								                    	book.shelf === shelf.type && (
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
													                                <option 
													                                	value="read">Read</option>
													                                <option 
													                                	value="none">None</option>
													                    		</select>		
									                    					</div>
									                    			</div>
									                    		</div>
									                    		<div className="book-title">{book.title}</div>
									                          	<div className="book-authors">{book.authors}</div>
									                      	</li>
									                      	)
								                    	))}
							                </ol>
							            </div>
							    </div>  )  
		                    })}
		        	</div>
		       		<div className="open-search">
		              <Link
		              to="/search"
		               >Add a book</Link>
		            </div>
		    </div>
		    )
	}
	}


export default ListBooks