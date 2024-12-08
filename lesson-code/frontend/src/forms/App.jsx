import "./App.css"
import { useState } from "react"

export const ProfileControlledInputs = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [url, setUrl] = useState(
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
  )
  const [about, setAbout] = useState("")

  const updateName = (event) => {
    // console.log(event)
    setName(event.target.value)
  }

  const updateAge = (event) => {
    setAge(event.target.value)
  }

  const updateAvatarUrl = (event) => {
    setUrl(event.target.value)
  }

  const updateAboutText = (event) => {
    setAbout(event.target.value)
  }

  const resetProfile = () => {
    setName("")
    setAge(null)
    setUrl(
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    )
    setAbout("")
  }

  // console.log("Running :)")

  return (
    <div className="container">
      <div>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              onChange={updateName}
              required
              minLength={3}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" onChange={updateAge} />
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input type="url" onChange={updateAvatarUrl} />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea onChange={updateAboutText} />
          </div>
          <div className="button-container">
            <button>Save profile</button>
            <button onClick={resetProfile}>Reset all</button>
          </div>
        </fieldset>
      </div>
      <div className="user-card">
        <img src={url} />
        <h1>
          {name} {age === null ? "" : `(${age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} */}
        <p>{about}</p>
      </div>
    </div>
  )
}
