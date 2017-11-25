import React, { Component } from 'react'
// import BookSelect from './BookSelect'
import { Link } from 'react-router-dom'

const categories = [
  { 'title':'Must Read',
    'id':'currentlyReading'
  },
  { 'title':'Will Read',
    'id':'wantToRead'
  },
  { 'title':'Read',
    'id':'read'
  }
]



class BooksCatalog extends Component{
  render(){
    const {books} = this.props
    return(
      categories.map((category)=>(
        <div className = 'shelf' key = {category}>
          <h1 className = 'shelf-title'>{category.title}</h1>

          {books
          .filter(books => category.id === books.shelf)
          .map(books => (
            <div className = 'book' key = {books.id}>
              <img src = {books.imageLinks.thumbnail}/>
              <h3>{books.title}</h3>
              <p>{books.authors[0]}</p>

              <select
                id = {books.identifier}
                value = {books.shelf}
                onChange = {(event) => this.props.onSelectChange(books, event.target.value)}
              >
                <optgroup label='Assing to'>
                  {categories.map(category => (
                    <option
                      key = {category.id}
                      value = {category.id}>
                      {category.title}
                    </option>
                  ))}
                </optgroup>
              </select>

            </div>
          ))}

        </div>
      ))
    )
  }

}


export default BooksCatalog
