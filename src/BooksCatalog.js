import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'


class BooksCatalog extends Component{
  render(){
    return(

      this.props.categories
      .filter(category => category.id !== 'none')
      .map((category)=>(
        <div className = 'shelf' key = {category.title}>
          <h1 className = 'shelf-title'>{category.title}</h1>

          {this.props.books
          .filter(books => category.id === books.shelf)
          .map(books => (
            <BookComponent
              books = {books}
              categories = {this.props.categories}
              shelf = {category}
              onSelectChange = {this.props.onSelectChange}
            />

          ))}

        </div>
      ))
    )
  }

}


export default BooksCatalog
