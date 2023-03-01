import { combineReducers } from "redux";
import StudentDataReducer from "./StudentData";
import StudentNamesReducer from "./StudentNames";
import AverageData from "./StudenDataAverage";

const allReducers = combineReducers({
  assignment: StudentDataReducer,
  nameList: StudentNamesReducer,
  base: AverageData,
});

export default allReducers;
