const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));

const initialState = dataJs;

const AverageData = (state = initialState, action) => {
  return state;
};
export default AverageData;
