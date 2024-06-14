// LocalData.js

// import userReducer from "./UserReducer";

export function loadData() {
  try {
    const serializedState = localStorage.getItem("items");
    if (serializedState === null) {
      console.log("bạn bị null");
      return { UserReducer:[]};
    }
    const parseData = JSON.parse(serializedState);
    console.log("load 11:", parseData);
    if (parseData ) {
      console.log("trong if && 11", parseData);
      return { UserReducer: parseData };
    }
    console.log("state 14", parseData);
    return { UserReducer: [] };
  } catch (err) {
    console.error("Could not load state", err);
    return { UserReducer: [] };
  }
}

export const saveData = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("items", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
