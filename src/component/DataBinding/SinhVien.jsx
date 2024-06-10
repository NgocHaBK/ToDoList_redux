import React, { Component } from 'react'

export default class SinhVien extends Component {
    //nếu đặt ngoài đây thì là thuộc tính của class chứ không phải là biến nên không thể có let hay const.
    hoTen = "Trần Ngọc Hà";
    lop = "front end abc"; 
    render() {
      // Nếu tạo ra biến ở trong hàm return thì nó gọi là biến chứ không phải thuộc tính
      const trungTam = "Oceannet";
      return (
        <div className="container">
          <ul>
            {/* Nhớ là phải dùng con trỏ this để lấy dữ liệu, và khi đặt biến thì không cần let hay var gì hết. */}
            <li>Họ Tên: {this.hoTen}</li>
                  <li>Lớp học: {this.lop}</li>
                  <li>Trung tâm: { trungTam}</li>
              </ul>
              {/* //Có thể tạo ra method ở trên để trả về cấu trúc ở trên */}
        </div>
      );
    }
}
