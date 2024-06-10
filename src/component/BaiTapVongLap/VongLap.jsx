import React, { Component } from "react";

export default class VongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSP: [
        { id: 1, tenSP: "samsung", gia: 1000 },
        { id: 2, tenSP: "iphone", gia: 2000 },
        { id: 3, tenSP: "hawei", gia: 900 },
      ],
    };
    }
    //viết phương thức render các sản phẩm thành các tr của table.
  render() {
      return (
        <div className="container">
          <h3 className="bg-dark p-5 text-center text-white">Demo vòng lặp</h3>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>tenSP</th>
                <th>giá thành</th>
              </tr>
            </thead>
                  <tbody>
                      {/* miễn là return value là mảng thì có thể render ra giao diện */}
                      {/* vì hàm map sẽ trả về mảng mới sau khi chạy xong */}
                      {/* chúng ta có thể tách hàm ra và dùng mảng gọi hàm push và trả về mảng đó, chứa cấu trúc tag như bên dưới */}
                      {this.state.mangSP.map((item, index) => {
                          return (<tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.tenSP}</td>
                              <td> {item.gia}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      );
  }
}
