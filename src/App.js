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

  categories = [
    { 'title':'Must Read',
      'id':'currentlyReading'
    },
    { 'title':'Will Read',
      'id':'wantToRead'
    },
    { 'title':'Read',
      'id':'read'
    },
    { 'title':'None',
      'id':'none'
    }

  ]

  // lifecycle method runs after load

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

  searchBooks = (query, maxresults) => {
    BooksAPI.search (query, maxresults).then((books) => {
      this.setState({books})
    })

  }

  render(){
    return(
      <div className = 'My-books-app'>

        {/** Books Catalog Component**/}

        <Route exact path = '/' render = {() =>(
          <BooksCatalog
            books = {this.state.books}
            onSelectChange = {this.updateBookList}
            categories = {this.categories}
          />
        )}/>


        {/** Search Catalog Component**/}

        <Route path = '/search' render = {({history}) =>(
          <SearchBook
            books = {this.state.books}
            categories = {this.categories}
            onSelectChange = {this.updateBookList}
            onInputChange = {this.searchBooks}
          />
        )}/>

      </div>
    )
  }
}



export default App;
