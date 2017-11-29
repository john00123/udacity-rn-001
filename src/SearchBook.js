import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'

class SearchBook extends Component{

  render(){
    return(
      <div className='search-page'>
        <Link
          to = '/'
          className = 'back'
          onClick = {this.props.refresh}
        > ✕ </Link>

        <input
          placeholder = 'Search Books'
          className = 'search-input'
          onChange = {(event) => this.props.onInputChange(event.target.value, 20)}>
        </input>

        {this.props.books.map ? this.props.books.map(books =>
            books.shelf === undefined ?
            <BookComponent
              key = {Math.random()}
              books = {books}
              categories = {this.props.categories}
              onSelectChange = {this.props.onSelectChange}
            /> : ''
          ) : <div className='no-results'> Sorry, no results found.</div>
        }

      </div>
    )
  }
}


export default SearchBook
