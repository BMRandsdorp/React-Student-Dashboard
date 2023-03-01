const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));

const initialState = dataJs;

function DataFiltered(array, check) {
  return array.filter((item) => check.includes(item.Name));
}

const StudentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHECKCHANGE`:
      const checkedNames = action.payload;

      const chartDataFiltered = DataFiltered(dataJs, checkedNames);

      return chartDataFiltered;
    default:
      return state;
  }
};
export default StudentDataReducer;
