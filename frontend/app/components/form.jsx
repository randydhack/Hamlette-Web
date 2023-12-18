"use client";
import { useGlobalContext } from "../context/store";
import React, { useState } from "react";

export default function Form() {
  const { setName } = useGlobalContext();
  const [nameList, setNameList] = useState([{ name: "", idx: null }]); // needs index and obj to know which field

  // each time u add a new input field, create another keyvalue
  const addNameList = () => {
    setNameList([...nameList, { name: "", idx: null }]);
  };

  // remove a name and splice out
  const removeName = (index) => {
    const copy = Object.values(nameList);
    nameList.splice(index, 1);
    copy.splice(index, 1);
    setNameList([...nameList]);
    setName([...copy]);
  };

  const addName = (index, input) => {
    const copy = Object.values(nameList);
    nameList[index].name = input;
    nameList[index].idx = index;
    setNameList([...nameList]);
    setName([...copy]);
  };

  return (
    <form action="" autoComplete="off">
      <div className="item-center w-full">
        <label>Add name(s)</label>
        {nameList.map((el, index) => {
          return (
            <div key={index} className="flex mt-3 mr-3 mb-3">
              <div>
                <input
                  type="text"
                  required
                  value={nameList.name}
                  onChange={(e) => addName(index, e.target.value)}
                />
              </div>
              <div className="ml-3">
                {nameList.length > 1 && <button type="button" onClick={(e) => removeName(index)}>
                  <span>Remove</span>
                </button>}
              </div>
            </div>
          );
        })}
        {nameList.length < 8 && <button type="button" onClick={(e) => addNameList()}>
          <span>Add another name</span>
        </button>}
      </div>
    </form>
  );
}
