import React, { Component } from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

// get books from API

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

// function to move a book to "Want to Read" shelf

  moveBookToWantToRead = (book) => {
    // base new state of component on the current state
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }))
    BooksAPI.update(book, "wantToRead")
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListBooks
            onMoveBookToWantToRead={this.moveBookToWantToRead}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
          books={this.state.books}
          
          />
          )}/>
      </div>
    )
  }  
}

export default App
