import { useState } from "react"
import "./App.css"

export const GameSettings = () => {
  const [gameSettings, setGameSettings] = useState({
    username: "Guest",
    difficulty: "hard",
    autoSave: false,
    volumeLevel: 2
  })
  const [gameStarted, setGameStarted] = useState(false)

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target

    setGameSettings({
      ...gameSettings,
      [name]: type === "checkbox" ? checked : value
    })
  }

  // const difficultyToLives = {
  //   hard: 1,
  //   medium: 3,
  //   easy: 5,
  // };

  // difficultyToLives[gameSettings.difficulty];

  let lives = 0

  if (gameSettings.difficulty === "hard") {
    lives = 1
  } else if (gameSettings.difficulty === "medium") {
    lives = 3
  } else {
    lives = 5
  }

  const volumeAsNumber = Number(gameSettings.volumeLevel)

  // const volumeToEmoji = {
  //   0: "🔈",
  //   1: "🔉",
  //   2: "🔉",
  //   3: "🔊",
  // };

  const volumeEmojis = ["🔈", "🔉", "🔉", "🔊"]

  const handleSubmit = (event) => {
    event.preventDefault()
    setGameStarted(true)
    console.log("Submitting", gameSettings)
  }

  if (gameStarted) {
    return <h1>Joining as {gameSettings.username}</h1>
  }

  return (
    <div className="container">
      <div className="theme-container"></div>
      <div className="lives">
        <h2>{lives} 💗</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>Username</span>
            <input
              // defaultValue={gameSettings.username}
              name="username"
              type="text"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="difficulty-options">
          <label>
            <input
              type="radio"
              name="difficulty"
              value="easy"
              defaultChecked={gameSettings.difficulty === "easy"}
              onChange={handleChange}
            />
            Easy
          </label>
          <label>
            {/* setDifficulty("") */}
            <input
              type="radio"
              name="difficulty"
              value="medium"
              defaultChecked={gameSettings.difficulty === "medium"}
              onChange={handleChange}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              value="hard"
              defaultChecked={gameSettings.difficulty === "hard"}
              onChange={handleChange}
            />
            Hard
          </label>
        </div>
        <div>
          <label>
            <div className="sound-container">
              Volume {volumeEmojis[volumeAsNumber]}
              <div className="sound-indicator">
                <span></span>
              </div>
            </div>
            <div>
              <input
                name="volumeLevel"
                type="range"
                min="0"
                max="3"
                defaultValue={gameSettings.volumeLevel}
                onChange={handleChange}
              />
            </div>
          </label>
          <div>
            <label>
              <div className="auto-save sound-container">
                <span>Auto save</span>
                <input
                  type="checkbox"
                  name="autoSave"
                  defaultChecked={gameSettings.autoSave}
                  onChange={handleChange}
                />
              </div>
            </label>
            {gameSettings.autoSave && (
              <span className="autosave">Saving every 2 minutes</span>
            )}
          </div>
        </div>
        <button>Start!</button>
      </form>
    </div>
  )
}
