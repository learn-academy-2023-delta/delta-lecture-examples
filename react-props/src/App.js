import React, { useState } from "react"
import Episode from "./components/Episode"
import Player from "./components/Player"
import "./App.css"

const App = () => {
  const episodes = [
    "130: ChatGPT and AI: Initial Reactions",
    "129: Developing With Content Should Be Easy",
    "127: Vue.js and it's Community",
    "125: A New Era of Framework Agnostic Components",
    "123: Turbocharging the Power of the Jamstack"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  // console.log(currentEpisode)

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    console.log(nextEpisode)
    setCurrentEpisode(episodes[nextEpisode])
  }

  return (
    <>
      <h3>Compressed.fm Clone</h3>
      <Player
        currentEpisode={currentEpisode}
        triggerNextEpisode={triggerNextEpisode}
      />
      <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}
      </div>
    </>
  )
}

export default App
