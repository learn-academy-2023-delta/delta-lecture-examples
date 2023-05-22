import React, { useState } from 'react'

const Tracker = () => {

  const [miles, setMiles] = useState(0)

  const addMile = () => {
    setMiles(miles + 1)  
  }

  console.log(miles)
  return(
    <>
      <p>Miles: {miles}</p>
      <button onClick={addMile}>Add a mile</button>
    </> 
  )
}

export default Tracker