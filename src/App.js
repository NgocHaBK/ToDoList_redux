import { useState } from "react";
import InputForm from "./toDoList/InputForm";
import EmployeeList from "./toDoList/EmployeeList";

export default function App() {
  const [item, setItem] = useState({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    height: "",
    department: "",
  });
  const storedItems = JSON.parse(localStorage.getItem("items"));
  console.log("2@@@@@@: ", storedItems);
  const [items, setItems] = useState(storedItems||[]);

  //mỗi khi thêm gì thì tự re render dẫn đến component App được re render liên tục nên useEffect cũng được gọi liên tục
  //nếu
  // useEffect(() => {
  //   if()
  //   console.log(items);
  //   localStorage.setItem("items", JSON.stringify(ơ]));
  // }, [items]);

  return (
    <div>
      <InputForm
        item={item}
        setItem={setItem}
        items={items}
        setItems={setItems}
      ></InputForm>
      <table className="table" style={{ width: "75%" }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>id</th>
            <th>startDate</th>
            <th>endDate</th>
            <th>height</th>
            <th>department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeList items={items} setItems={setItems} setItem={setItem} />
        </tbody>
      </table>
    </div>
  );
}
