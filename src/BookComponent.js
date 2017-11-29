import React, { Component } from 'react'


class BookComponent extends Component{

  render(){

    return(

    <div
      className = 'book'
      key = {this.props.books.id}
      >

      <img
      src = {this.props.books.imageLinks? this.props.books.imageLinks.thumbnail : "#"}
      alt = {this.props.books.title}
      />

      <h5>{this.props.books.title}</h5>
      <p>{this.props.books.authors + '\xa0' }</p>
      <select className='dropdown'
        id = {this.props.books.identifier}
        value = {this.props.books.shelf !== undefined ? this.props.books.shelf : 'none'}

        onChange = {(event) => this.props.onSelectChange(this.props.books, event.target.value)}
      >
        <optgroup label='Assing to'>
          {this.props.categories.map(category => (
            <option
              key = {category.id}
              value = {category.id}>
              {category.title}
            </option>
          ))}
        </optgroup>
      </select>

    </div>
    )
  }
}


export default BookComponent
