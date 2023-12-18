import React, { useEffect } from 'react'

import { useGlobalContext } from '../context/store'

export default function Wheel() {
  const { name } = useGlobalContext();

  useEffect(() => {

  }, [name])
  return (
    <div>
      {name.map((el, index)=> {
        return <div key={index}>{el.name}</div>
      })}
    </div>
  )
}
