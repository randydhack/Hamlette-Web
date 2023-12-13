'use client';

import React, { useState } from "react";

export default function Form() {
  const [names, setNames] = useState([{ name: "" }]);

  const addName = () => {
    setNames([...names, {name: ""}])
  }

  const removeName = (index) => {
    const copy = [...names];
    copy.splice(index, 1);
    setNames(copy)
  }


  return (
    <form action="" autoComplete="off">
      <div className="">
        <label>Add name(s)</label>
        {names.map((name, index) => {
          return <div key={index}>
            <div>
              <input type="text" required />
              <button type="button" onClick={e => addName()}>
                <span>Add another name</span>
              </button>
            </div>
            <div>
              <button type="button" onClick={e => removeName(index)}>
                <span>Remove</span>
              </button>
            </div>
          </div>;
        })}
      </div>
    </form>
  );
}
