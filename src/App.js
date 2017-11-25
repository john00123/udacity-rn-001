import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import * as BooksAPI from './BooksAPI'

//components
import SearchBook from './SearchBook'
import BooksCatalog from './BooksCatalog'

class App extends Component{

  state = {
    books: []
  }


  // method runs after load

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  updateBookList = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
    })
  }


  render(){
    return(
      <div className = 'My-books-app'>

        <Route exact path = '/' render = {() =>(
          <BooksCatalog
            books = {this.state.books}
            onSelectChange = {this.updateBookList}
          />
        )}/>

        <Route path = '/search' render = {({history}) =>(
          <SearchBook/>
        )}/>

      </div>
    )
  }
}



export default App;
