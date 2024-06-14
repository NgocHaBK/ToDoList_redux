import React, { useState } from "react";
import InputForm from "./exercise/InputForm";
import ToDoList from "./exercise/ToDoList";
import { useDispatch } from "react-redux";
import { loadData, saveData } from "./redux/reducers/LocalData";
export default function App() {
  const [item, setItem] = useState({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    height: "",
    department: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = (id, arrUsers) => {
    const updatedItemIndex = arrUsers.findIndex((item) => item.id === id);
    setItem(arrUsers[updatedItemIndex]);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (item.id) {
      dispatch({ type: "UPDATE_USER", payload: item });
      // const loadedDataFromLocal = loadData();
      const updatedUsers = loadData().UserReducer.map((u) =>
        u.id === item.id ? item : u
      );
      console.log("bạn đang vào if app 28");
      saveData(updatedUsers);
      alert("Bạn đã cập nhật thông tin thành công !")
    } else {
      const newItem = { ...item, id: new Date().getTime() };
      dispatch({ type: "ADD_USER", payload: newItem });
      console.log("app js 34 trước load:");
      const newLocalArr = loadData();
      console.log("app js 36 sau load:");
      console.log("app js 37:", newLocalArr);
      // saveData([...newLocalArr.users, newItem]);
      console.log("app js 40");
      alert("Bạn đã thêm thông tin thành công !")
    }
    handleReset();
  }
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
      />
      <ToDoList onhandleUpdate={handleUpdate} />
    </div>
  );
}
