import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShelfOptions extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	render () {

		//set book.shelf to none option
		let currentOption = 'none'



		//

		return (

			<div className="book-shelf-changer">
				<select 
					onChange={(event) => this.props.moveBook(this.props.book, event.target.value)}
					defaultValue={currentOption}>
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

			)
	}
}

export default ShelfOptions