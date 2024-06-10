import React, { Component } from 'react'
import Product from './Product'
export default class ProducList extends Component {
  render() {
    return (
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}
