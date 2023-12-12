'use client';

import React, { useState } from "react";

export default function Form() {
  const [names, setNames] = useState([{ name: "" }]);

  return (
    <form action="" autoComplete="off">
      <div className="">
        <label>Add name(s)</label>
        {names.map((name, index) => {
          return <div key={index}>
            <div>
              <input type="text" required />
              <button type="button">
                <span>Add another name</span>
              </button>
            </div>
            <div>
              <button type="button">
                <span>Remove</span>
              </button>
            </div>
          </div>;
        })}
      </div>
    </form>
  );
}
