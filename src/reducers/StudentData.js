//import data from "../data/data.json";
const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));
console.log(dataJs);
const initialState = dataJs;

const StudentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHECKED`:
      // for test only return single check
      const nameIdChecked = action.payload;
      const singlePerson = state.filter(
        (element) => element.name === nameIdChecked
      );
      console.log(singlePerson);
      return {
        ...state,
        // return state when matches checked names

        // ...state.filter((Name) => Name !== nameIdChecked)
      };
    /*case `UNCHECKED`:
      const nameId = action.payload;
      return {
        ...state,

        // exclude payload from state (array fliter / splice method)
        //...state.filter/splice((Name) => Name !== nameId),
      };
      break;*/
    default:
      return state;
      break;
  }
};

export default StudentDataReducer;

/*   for(let i = 0; i < state.length; i++){  }*/
