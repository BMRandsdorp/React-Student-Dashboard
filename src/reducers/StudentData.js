//import data from "../data/data.json";
const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));

const initialState = dataJs;

/*let NewChartDataFiltered = (array, names) => {
  array.filter((obj) => names.includes(obj));
};*/
function DataFiltered(state, check) {
  state.filter((item) => check.includes(item.name));
}

const StudentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHECKCHANGE`:
      const checkedNames = action.payload;
      const chartDataFiltered = DataFiltered(state, checkedNames);
      //console.log(chartDataFiltered);
      return chartDataFiltered;
    default:
      return state;
  }
};
/* switch (action.type) {
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
    case `UNCHECKED`:
      const nameId = action.payload;
      return {
        ...state,

        // exclude payload from state (array fliter / splice method)
        //...state.filter/splice((Name) => Name !== nameId),
      };
      break;
    default:
      return state;
      break;
  }*/

export default StudentDataReducer;

/*chartDataFiltered.filter((x) => {
  return x.name == checkedNames;
});*/

/*   switch (action.type) {
    case `CHECKCHANGE`:
      let checkedNames = action.payload;
      let chartDataFiltered = state;

      //console.log(chartDataFiltered);
      return chartDataFiltered.filter((item) => item.name === checkedNames);
    default:*/
