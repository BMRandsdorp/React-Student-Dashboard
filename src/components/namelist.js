import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nameCheckChange } from "../actions";

function NameList() {
  const dispatch = useDispatch();
  // grab Names from state and turn array into ul>li>>checkbox
  const NameListData = useSelector((state) => state.nameList);
  const NamesListed = NameListData.map((name, key) => (
    <li key={key}>
      <input type="checkbox" name={name} value={name} defaultChecked />
      <label htmlFor={name}> {name} </label>
    </li>
  ));

  let checkedNames = [];
  const checkOnChange = (e) => {
    if (e.target.type === "checkbox") {
      const checked = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkedNames = Array.from(checked).map((check) => check.value);
      // use checked names to filter through assignment data in reducer
      dispatch(nameCheckChange(checkedNames));
    }
  };

  return (
    <div className="filter-block">
      <div> Check/uncheck to filter students evaluations </div>
      <ul className="name-list" onChange={checkOnChange}>
        {NamesListed}
      </ul>
    </div>
  );
}
export default NameList;
