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
          onClick = {this.props.books}
          >
          ✕
        </Link>

        <input
          placeholder = 'Search Books'
          className = 'search-input'
          onChange = {(event) => this.props.onInputChange(event.target.value, 20)}>
        </input>


        {this.props.books
          .filter((books) => books.shelf === undefined)
          .filter((books) => books.imageLinks.thumbnail !== undefined)
          .map(books => (
            <BookComponent
              books = {books}
              categories = {this.props.categories}
              onSelectChange = {this.props.onSelectChange}
            />
          ))
        }

      </div>
    )
  }
}


export default SearchBook
