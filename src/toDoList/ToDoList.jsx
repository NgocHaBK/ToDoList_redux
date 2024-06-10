import React from "react";

export default function ToDoList({ items, onhandleUpdate, onhandleDelete }) {
  return (
    <>
      <div className="row container mx-auto">
        <button className="col-4 btn btn-success w-25"> ALL </button>
        <button className="col-4 btn btn-success ms-2 w-25">Done</button>
        <button className="col-4 btn btn-success ms-2 w-25">ToDo</button>
      </div>
      <div className="text-center d-flex justify-content-center">
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
            {(items || []).map((item, index) => {
              return (
                <tr key={index}>
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
                        onhandleUpdate(item.id);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => onhandleDelete(item.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
