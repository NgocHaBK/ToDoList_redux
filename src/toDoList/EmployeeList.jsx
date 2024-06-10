import React, { useEffect } from "react";

export default function EmployeeList({ items, setItems, setItem }) {
  const handleDelete = (item) => {
    setItems((prevItems) => {
      return prevItems.filter((i) => item.id !== i.id);
    });
  };

  const handleUpdate = (id) => {
    let updatedSinhVien = items.findIndex((item) => item.id === id);
    setItem(items[updatedSinhVien]);
    console.log(items[updatedSinhVien].id);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      {(items || []).map((item) => (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td> {item.id}</td>
          <td>{item.startDate}</td>
          <td>{item.endDate}</td>
          <td>{item.height}</td>
          <td>{item.department}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => {
                handleUpdate(item.id);
              }}
            >
              Update
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => handleDelete(item)}
            >
              X
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}
