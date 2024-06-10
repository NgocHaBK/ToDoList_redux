import React, { Component } from 'react'
import Header from "./Header"
import Slider from './Slider'
import ProducList from './ProducList'
import Footer from './Footer'
export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
            <Header />
            <Slider />
            <ProducList />
            <Footer></Footer>
      </div>
    )
  }
}
