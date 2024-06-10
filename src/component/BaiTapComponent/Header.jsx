import React, { Component } from 'react'

export default class Header extends Component {
    handleClick() {
        alert("clicked me!");
    }
  render() {
    return (
      <div className='bg-success'>
            <button onClick={this.handleClick} >click me!</button>
            this is Header.
      </div>
    )
  }
}
