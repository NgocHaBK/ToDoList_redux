import { saveData } from "./LocalData";

const initialState = []
console.log("bạn đang trong userReducer! 6")
const userReducer = (state = initialState, action) => {
  let newState;
  console.log("9:", state);
  //   state = initialState;
  switch (action.type) {
    case "ADD_USER":
      console.log("state 11:", state);
      newState = [...state,action.payload]
      saveData(newState);
      return newState;
      case "UPDATE_USER":
          const updated_user = state.map((user) => user.id === action.payload.id ? action.payload : user);
    //   newState = {
    //     ...state,
    //     users: state.users.map((user) =>
    //       user.id === action.payload.id ? action.payload : user
    //     ),
    //   };
      saveData(updated_user);
      return [...updated_user];
      case "REMOVE_USER":
          const newUsers = state.filter(
              (user) => user.id !== action.payload.id
          );
            // newState = {
            //   ...state,
            //   users: state.users.filter(
            //     (user) => user.id !== action.payload.id
            //   ),
            // };
      saveData(newUsers);
      return [...newUsers];
    default:
      return state;
  }
};

export default userReducer;
