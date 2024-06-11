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

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems !== "undefined" ? JSON.parse(savedItems) : [];

    // []
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const data = localStorage.getItem("items");
    if (data !== "undefined") return JSON.parse(data);
    else return [];
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = (id) => {
    const updatedItemIndex = items.findIndex((item) => item.id === id);
    setItem(items[updatedItemIndex]);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      const updatedItems = items.map((i) => (i.id === item.id ? item : i));
      setItems(updatedItems);
    } else {
      const newItem = { ...item, id: new Date().getTime().toString() };
      setItems([...items, newItem]);
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
      />
      <ToDoList
        items={items}
        onhandleUpdate={handleUpdate}
        onhandleDelete={handleDelete}
      />
    </div>
  );
}
