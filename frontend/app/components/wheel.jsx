import React, { useEffect } from "react";
import "./wheel.css";

import { useGlobalContext } from "../context/store";

export default function Wheel() {
  const { name } = useGlobalContext();

  useEffect(() => {}, [name]);
  return (
    <div>
      <div className="circle">
        {name.map((el, index) => {
          return (
            <div key={index}>
              <li className={`wheel-section-${index}`}>
                <div className={`text-${index} text`}>{el.name}</div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
