import React, { Component } from 'react'

export default class Event extends Component {
    handleClick(message){
        alert(`hello ${message}`);
    }
  render() {
    let message = "Oceannet";
    return (
      <div className='container'>
        {/* //cách thứ nhất để truyền tham số vào hàm */}
        <button onClick={this.handleClick.bind(this, message)}> hello this is my message send to you!</button>
        <button onClick={()=>this.handleClick("cybersoft")}>click me to recieve message</button>
      </div>
    )
  }
}
