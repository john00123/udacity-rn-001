import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'

class SearchBook extends Component{

  render(){
    return(
      <div className='search-page'>
        <input
        className = 'search-input'
        onChange = {(event) => this.props.onInputChange(event.target.value, 20)}>
        </input>

        {this.props.books
          .map(books => (
            <BookComponent
              books = {books}
              categories = {this.props.categories}
              onSelectChange = {this.props.onSelectChange}
            />

        )
      )}
      </div>
    )
  }
}


export default SearchBook
