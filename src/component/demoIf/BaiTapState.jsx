import React, { Component } from 'react'
import xeDo from "./img/xe_do.webp"
import xeXanh from "./img/xeXanh.jpg"
import xeVang from "./img/xeVang.webp"
export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathURL: xeDo,
        }
    }
    handleChangColor = (color) => {
        this.setState({
            pathURL:color,
        })
    }
    
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <h3>chọn màu xe bạn thích</h3>
          <img src={this.state.pathURL} alt="xe đỏ" className="w-100"></img>
        </div>
        <div className="col-lg-6">
          <h3>chọn màu xe:</h3>
          <button
            onClick={() => {
              this.handleChangColor(xeDo);
            }}
            className="btn btn-danger me-2"
          >
            màu đỏ
          </button>
          <button
            className="btn btn-success me-2"
            onClick={() => {
              this.handleChangColor(xeXanh);
            }}
          >
            màu xanh
          </button>
          <button
            className="btn btn-warning me-2"
            onClick={() => {
              this.handleChangColor(xeVang);
            }}
          >
            màu vàng
          </button>
        </div>
      </div>
    );
  }
}
