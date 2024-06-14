import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { loadData } from "./LocalData";
export default function ToDoList({ onhandleUpdate }) {
  let dispatch = useDispatch();
  let arrUsers = useSelector((state) => {
    console.log("state 7 todolist:",state)
    return state.UserReducer;
  }
  );

  console.log("ArrUser 8: ", arrUsers);

  // useEffect(() => {
  //   const dataFromLocal = loadData();
  //   console.log("@@ 10 todolist :", dataFromLocal);
  //   if (dataFromLocal.users) {
  //     for (let data of dataFromLocal.users) {
  //       console.log("bên trong hàm foreach 14 todo", data);
  //       dispatch({ type: "ADD_USER", payload: data });
  //     }
  //   }
  // }, [dispatch]);

  function handleDelete(id) {
    dispatch({ type: "REMOVE_USER", payload: { id } });
  }
  console.log("render todolist 23");
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
            {(arrUsers || []).map((item, index) => {
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
                        onhandleUpdate(item.id, arrUsers);
                      }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(item.id)}
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
