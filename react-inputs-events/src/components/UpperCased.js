import React from 'react'

const UpperCased = (props) => {
  const changeToUpperCase = (userInput) => {
    return userInput.toUpperCase()
  }

  return (
    <>
      <h2>HELLO! I SEE YOUR NAME IS:</h2>
      <p>{changeToUpperCase(props.name)}</p>
    </>
  )
}

export default UpperCased