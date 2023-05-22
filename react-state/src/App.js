import React, { useState } from 'react'
import Tracker from './components/Tracker'

const App = () => {

  const [color, setColor] = useState("blue")

  return(
    <>
      <h2>Mile Tracker</h2>
      <h3 style={{ color: color }}>January</h3>
      <Tracker />
      <h3>February</h3>
      <Tracker />
      <h3>March</h3>
      <Tracker />
      <h3>April</h3>
      <Tracker />
    </> 
  )
}

export default App