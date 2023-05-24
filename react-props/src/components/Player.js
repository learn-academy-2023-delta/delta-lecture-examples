import React from "react"

const Player = (props) => {
  // console.log(props)
  return (
    <>
      <h3>Media Player</h3>
      <h3>Current episode: {props.currentEpisode}</h3>
      <button onClick={props.triggerNextEpisode}>Play Next Episode</button>
    </>
  )
}

export default Player
