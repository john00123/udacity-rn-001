import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import * as BooksAPI from './BooksAPI'

//components
import SearchBook from './SearchBook'
import BooksCatalog from './BooksCatalog'

class App extends Component{

  //defines state data

  state = {
    books: []
  }


  // method runs after load

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // searchBook(){
  // }

  render(){
    return(
      <div className = 'My-books-app'>

        <Route exact path = '/' render = {() =>(
          <BooksCatalog
            books = {this.state.books}
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
