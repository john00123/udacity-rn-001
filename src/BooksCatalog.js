import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'


class BooksCatalog extends Component{
  render(){
    return(
      <div>

        <div className ='header'>

        </div>

        <div className = 'hero'>
          <h1>Book Reading App</h1>
          <p> Organize your favorite books into collections.<br/> Keep track of their progress. </p>
          <Link
            to = '/search'
            onClick = {this.props.onSelectChange}
            className = 'new-book'>
            Add a new Book
          </Link>
        </div>

        {this.props.categories
        .filter(category => category.id !== 'none')
        .map((category)=>(
          <div className = 'shelf' key = {category.id}>
            <h4 className = 'shelf-title'>{category.title}</h4>
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
        ))}
      </div>
    )
  }

}


export default BooksCatalog
