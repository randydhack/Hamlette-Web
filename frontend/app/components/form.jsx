"use client";

import React, { useState } from "react";

export default function Form() {
  const [foods, setFoods] = useState([{ food: 'hello' }]);

  const removeFood = async (event, index) => {
    event.preventDefault()
    const copy = [...foods]
    const newFoodList = copy.splice(index, 1);
    console.log(newFoodList)
    setFoods(copy)
  }

  const addFood = async (e) => {
    e.preventDefault()
    setFoods([...foods, { food: 'dsadsad' }])
  }

  return (
    <form action="" autoComplete="off">
      <div className="">
        <label>Add Food(s)</label>
        {foods.map((food, index) => {
          return (
            <div key={index}>
              <div  className="flex">
                <input type="text" required />
                {foods.length > 1 && (
                  <button type="button" onClick={e => removeFood(e, index)}>
                    <span>Remove</span>
                  </button>
                )}
              </div>
              <div>
                {foods.length - 1 === index && foods.length <= 8 && (
                  <button type="button" onClick={e => addFood(e)}>
                    <span>Add a food</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}
