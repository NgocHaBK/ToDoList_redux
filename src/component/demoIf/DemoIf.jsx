import React, { Component } from 'react'

export default class DemoIf extends Component {
    constructor(props) {
        super(props);
        //this.state là thuộc tính được kế thừa từ class Component, chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của component.
        this.state={
            isLogIn : false,
            userName : "",    
        }
    }
    //nếu dùng {this.state.isLogIn=true;this.state.userName="trần ngọc hà" thì chỉ biến đưuọc thay đổi chứ giao diện không render lại.}
    //muốn fix thì phải dùng hàm this.setState({})
    LogIn = () => {
        //this.setState là phương thức được kế thừa từ Component => thay đổi giá trị state và gọi hàm render => render lại giao diện.
        //setState là phương thức bất đồng bộ. Cho nên khi dùng clg() thì giá trị của state được xuất ra là chưa được thay đổi. nếu muốn xuất ra chính xác giá trị được thay đổi thì xuất kế bên, bên trong hàm this.setState() như dưới ví dụ.
        this.setState({
            isLogIn : true,
            userName:"Trần Ngọc Hà"
        }, () => {
            console.log(this.state);
        })
        // console.log(this.state);
    }
    LogOut = () => {
        this.setState({
            isLogIn: false,
        })
    }
    render() {
      
        //mỗi khi hàm this.setState được gọi thì hàm render sẽ được execute lại
    return (
      <div>
        {this.state.isLogIn ? (
          <>xin chào {this.state.userName}! đây là cybersoft. <button onClick={this.LogOut}>Log out</button></>
        ) : (
          <>chào bạn, bạn hãy đăng nhập nhé!<button onClick={this.LogIn}>Log In</button></>
        )}
      </div>
    );
  }
}
