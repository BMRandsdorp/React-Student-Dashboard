const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));
//console.log(dataJs);

const nameList = dataJs.map((data) => {
  return data.Name;
});
//console.log(nameList);

const shortList = nameList.filter(
  (person, index) => index === nameList.findIndex((other) => person === other)
);
// console.log(shortList);
const initialState = shortList;
const StudentNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default StudentNamesReducer;
