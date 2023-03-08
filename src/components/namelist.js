import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nameCheckChange } from "../actions";

function NameListCheck() {
  const dispatch = useDispatch();
  // grab Names from state and turn array into ul>li>>checkbox
  const NameListData = useSelector((state) => state.nameList);
  const NamesListed = NameListData.map((name, key) => (
    <li key={key}>
      <input
        type="checkbox"
        name={name}
        id={name}
        value={name}
        defaultChecked
      />
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
      // use checked names to filter through assignment data in reducer to change barchart data
      dispatch(nameCheckChange(checkedNames));
    }
  };

  return (
    <div className="filter-block">
      <div>
        Check/uncheck to filter students evaluations or go to the individual
        student page in the navigation menu at
        <a href="#top"> the top of page</a>
      </div>
      <ul className="name-list" onChange={checkOnChange}>
        {NamesListed}
      </ul>
    </div>
  );
}
export default NameListCheck;
