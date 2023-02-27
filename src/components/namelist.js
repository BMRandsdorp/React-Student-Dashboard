import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nameUnchecked, nameChecked } from "../actions";

function NameList() {
  const dispatch = useDispatch();
  const checkOnChange = (e) => {
    if (e.target.checked === false) {
      const NameValue = e.target.value;
      console.log(NameValue);
      // dispatch(nameUnchecked(NameValue));
    }
    if (e.target.checked === true) {
      const NameValue = e.target.value;
      console.log(NameValue);
      dispatch(nameChecked(NameValue));
    }
  };
  // grab Names from state and turn array into ul>li>a (li>checkbox) with array methods
  const NameListData = useSelector((state) => state.nameList);
  // console.log(NameListData);
  const NamesListed = NameListData.map((name, key) => (
    <li key={key}>
      <input
        type="checkbox"
        name={name}
        value={name}
        onChange={checkOnChange}
        // defaultChecked
      />
      <label htmlFor={name}> {name} </label>
    </li>
  ));

  //console.log(NamesListed);
  return (
    <div>
      <ul className="name-list">{NamesListed}</ul>
    </div>
  );
}
export default NameList;
