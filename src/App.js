import React, { Component } from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
    books: [],
  }

// get books from API - This collection represents the books currently in the bookshelves in your app.

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
    //BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // function to log book type

  moveBook = (book, shelf) => {
      BooksAPI.update(book, shelf).then(response => {
        book.shelf = shelf

        let movedBooks = this.state.books.filter(b => b.id !== book.id)

        movedBooks.push(book)
        this.setState({books: movedBooks})

      })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListBooks
            moveBook={this.moveBook}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
          books={this.state.books}
          moveBook={this.moveBook}
          />
          )}/>
      </div>
    )
  }  
}

export default App
