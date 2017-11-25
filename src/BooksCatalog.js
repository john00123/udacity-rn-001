import React, { Component } from 'react'
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
    return(
      categories.map((category)=>(
        <div className = 'shelf' key={category}>
          <h1 className = 'shelf-title'>{category.title}</h1>
          {this.props.books
            .filter(books => category.id === books.shelf)
            .map(books => (
              <div className = 'book' key = {books.id}>
                <img src = {books.imageLinks.thumbnail}/>
                <h3>{books.title}</h3>
                <p>{books.authors[0]}</p>



                <select id = {books.identifier}>
                  <optgroup label='Assing to'>
                    <option id = {categories[0].title} >{categories[0].title}</option>
                    <option id = {categories[1].title}>{categories[1].title}</option>
                    <option id = {categories[2].title}>{categories[2].title}</option>
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
