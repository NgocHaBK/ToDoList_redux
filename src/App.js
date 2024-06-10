import { useState, useEffect } from "react";
import InputForm from "./toDoList/InputForm";
import ToDoList from "./toDoList/ToDoList";

export default function App() {
  const [item, setItem] = useState({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    height: "",
    department: "",
  });
  const [items, setItems] = useState([]);
  console.log("ngoài:", items);
  //mỗi khi thêm gì thì tự re render dẫn đến component App được re render liên tục nên useEffect cũng được gọi liên tục
  //nếu
  useEffect(() => {
    fetchData();
    console.log("bạn vào effect once!");
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    console.log("items 24", items);
  }, [items]);

  const fetchData = () => {
    const data = JSON.parse(localStorage.getItem("items"));
    console.log("data,", data);
    if (data) {
      console.log("bạn vào dòng 34:", data);
      setItems(data);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = (id) => {
    let updatedSinhVien = items.findIndex((item) => item.id === id);
    setItem(items[updatedSinhVien]);
  };
  const handleDelete = (id) => {
    console.log("id,items", id, items);
    const tmpItem = items.filter((item) => {
      return item.id !== id;
    });
    console.log("temp item 46:", tmpItem);
    setItems(tmpItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      console.log("bạn đang trong if");
      const _item = items.find((i) => i.id === item.id); // chỗ này sẽ trả về object tham chiếu đến ô nhớ của thằng được tìm thấy bằng
      Object.assign(_item, item); //nếu làm như này thì sẽ thay đổi luôn giá trị của thằng tại idx đó trong state items
      setItems([...items]);
    } else {
      const id = new Date().getTime();
      console.log("bạn đang trong else");
      //làm như dưới đây thì không lo lắng item đã được cập nhật hay chưa.
      setItems((preItems) => [...preItems, { ...item, id }]);
    }
    handleReset();
  };
  const handleReset = () => {
    setItem({
      id: "",
      name: "",
      startDate: "",
      endDate: "",
      height: "",
      department: "",
    });
  };
  return (
    <div>
      <InputForm
        item={item}
        onhandleChange={handleChange}
        onSubmit_={handleSubmit}
      ></InputForm>
      <ToDoList
        items={items}
        onhandleUpdate={handleUpdate}
        onhandleDelete={handleDelete}
      />
    </div>
  );
}
