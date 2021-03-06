import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	render() {
		//create bookshelf object
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
		        {/* map bookshelves by type */}
		        		{bookShelf.map((shelf, index) => {
		        		{/* array for books on the shelf, rendered according to shelf property */}
		        			const booksOnShelf = this.props.books.filter( book =>  book.shelf === shelf.type)
		        			return (
		        				<div className="bookshelf" key={index}>
		        					<h2 className="bookshelf-title">{shelf.name}</h2>
		        						<div className="bookshelf-books">
		        					{/* call BookShelf Component - booksOnShelf now the array with books */}
		        							<BookShelf
		        								books={ booksOnShelf }
		        								moveBook={ this.props.moveBook }
		        								/>
							            </div>
							    </div>  )  
		                    })}
		        	</div>
		        {/* Link to search page */}
		       		<div className="open-search">
		              <Link
		              to="/search"
		               ></Link>
		            </div>
		    </div>
		)
	}
}

export default ListBooks