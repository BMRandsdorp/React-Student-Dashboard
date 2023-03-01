import { combineReducers } from "redux";
import StudentDataReducer from "./StudentData";
import StudentNamesReducer from "./StudentNames";

const allReducers = combineReducers({
  assignment: StudentDataReducer,
  nameList: StudentNamesReducer,
});

export default allReducers;
