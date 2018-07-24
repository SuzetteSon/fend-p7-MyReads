import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim()})
	}

	clearQuery = () => {
		this.setState({ query: '' })
	}



	render() {
		return (
		    <div className="app">  
	        	
		        
		          <div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		        {/* BOOKSHELF 1: Currently reading */}
		            <div className="list-books-content">
		              <div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Currently Reading</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                    {this.props.books.map((book) => (
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
		                    		</div>
		                    		<div className="book-title">{book.title}</div>

		                          	<div className="book-authors">{book.authors}</div>
		                      	</li>
		                    ))}
		                    </ol>
		                  </div>   
		                  </div>
		                </div>
		        {/* BOOKSHELF 2: Want to Read */}
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Want to Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                      <ol className="books-grid">
		                    {this.props.books.map((book) => (
		                    	<li key={book.id}>
		                    		<div className="book">
		                    			<div className="book-top">
		                    				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
		                    					<div className="book-shelf-changer">
		                    						<select>
		                    							<option value="move" disabled>Move to...</option>
		                                				<option value="currentlyReading">Currently Reading</option>
						                                <option value="wantToRead">Want to Read</option>
						                                <option value="read">Read</option>
						                                <option value="none">None</option>
						                    		</select>		
		                    					</div>
		                    			</div>
		                    		</div>
		                    		<div className="book-title">{book.title}</div>

		                          	<div className="book-authors">{book.authors}</div>
		                      	</li>
		                    ))}
		                    </ol>
		                      
		                    </ol>
		                  </div>
		                </div>
		        {/* BOOKSHELF 3: Read */}
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                      <ol className="books-grid">
		                    {this.props.books.map((book) => (
		                    	<li key={book.id}>
		                    		<div className="book">
		                    			<div className="book-top">
		                    				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
		                    					<div className="book-shelf-changer">
		                    						<select>
		                    							<option value="move" disabled>Move to...</option>
		                                				<option value="currentlyReading">Currently Reading</option>
						                                <option value="wantToRead">Want to Read</option>
						                                <option value="read">Read</option>
						                                <option value="none">None</option>
						                    		</select>		
		                    					</div>
		                    			</div>
		                    		</div>
		                    		<div className="book-title">{book.title}</div>

		                          	<div className="book-authors">{book.authors}</div>
		                      	</li>
		                    ))}
		                    </ol>
		                    </ol>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="open-search">
		              <Link
		              to="/search"
		               >Add a book</Link>
		            </div>
		          </div>
		        )}




	 
	}
ListBooks.propTypes = {
	books: PropTypes.array.isRequired
}

export default ListBooks