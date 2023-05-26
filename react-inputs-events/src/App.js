import React, { useState } from 'react'
import UpperCased from './components/UpperCased'

const App = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    // e stands for event which is an object that we can target the input using dot notation
    // console.log(e)
    setName(e.target.value)
  }

  return (
    <>
      <h1>Greeter App</h1>
      {/* onChange passes event object automatically to function */}
      <input 
        type="text" 
        onChange={handleChange}
        value={name}
      />
      <UpperCased name={name} />
    </>

  )
}

export default App