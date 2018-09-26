import React, { Component } from 'react'

class ShoppingList extends Component {
  render() {
    return (
      <div className='shopping-list'>
      <h1>Shopping list for {this.props.name}</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      </div>
    )
  }
}

export default ShoppingList