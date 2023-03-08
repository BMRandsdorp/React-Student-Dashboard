const studentData = require("../data/data.json");

const dataJs = JSON.parse(JSON.stringify(studentData));

const nameList = dataJs.map((data) => {
  return data.Name;
});

const shortList = nameList.filter(
  (person, index) => index === nameList.findIndex((other) => person === other)
);

const initialState = shortList;
const StudentNamesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default StudentNamesReducer;
