import "./App.css"
import { useState } from "react"

export const ProfileControlledInputs = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [url, setUrl] = useState(
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
  )
  const [about, setAbout] = useState("")
  const [favoriteSeason, setFavoriteSeason] = useState("")
  const [hobbies, setHobbies] = useState({
    biking: false,
    chess: false,
    coding: false,
    reading: false
  })
  const [favoriteSnack, setFavoriteSnack] = useState("")

  const likedHobbies = Object.keys(hobbies)
    .filter((hobby) => {
      return hobbies[hobby]
    }) // Get keys where value is true
    .join(", ") // Join the hobbies into a string separated by commas

  const updateName = (event) => {
    console.log(event)
    setName(event.target.value)
  }

  const updateAge = (event) => {
    // console.log(event.target.value, typeof event.target.value)
    setAge(Number(event.target.value))
  }

  const updateAvatarUrl = (event) => {
    setUrl(event.target.value)
  }

  const updateAboutText = (event) => {
    setAbout(event.target.value)
  }

  const resetProfile = () => {
    setName("")
    setAge(0)
    setUrl(
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    )
    setAbout("")
    setFavoriteSeason("")
    setHobbies({
      biking: false,
      coding: false,
      chess: false,
      reading: false
    })
    setFavoriteSnack("")
  }

  // console.log("Running :)")

  const updateFavoriteSeason = (event) => {
    console.log(event.target.value)
    setFavoriteSeason(event.target.value)
  }

  const favoriteSeasonInputs = ["spring", "summer", "autumn", "winter"].map(
    (season) => {
      return (
        <label key={season}>
          {season}{" "}
          <input
            type="radio"
            value={season}
            checked={favoriteSeason === season}
            onChange={updateFavoriteSeason}
            name="season"
          />
        </label>
      )
    }
  )

  const hobbiesCheckboxes = Object.keys(hobbies).map((hobby) => {
    return (
      <label key={hobby}>
        {hobby}{" "}
        <input
          type="checkbox"
          checked={hobbies[hobby]}
          onChange={() => {
            setHobbies({
              ...hobbies,
              [hobby]: !hobbies[hobby]
            })
          }}
        />
      </label>
    )
  })

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
              value={name}
              required
              minLength={3}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input
                type="number"
                value={age === 0 ? "" : age}
                onChange={updateAge}
              />
              <button
                onClick={() => {
                  setAge(age + 5)
                }}
              >
                +5
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input type="url" value={url} onChange={updateAvatarUrl} />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea value={about} onChange={updateAboutText} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <h4>Favorite season:</h4>
            {favoriteSeasonInputs}
          </div>
          <div>
            <h4>Hobbies</h4>
            {hobbiesCheckboxes}
          </div>
          <div>
            <h4>Favorte stack</h4>
            <select
              value={favoriteSnack}
              onChange={(event) => setFavoriteSnack(event.target.value)}
            >
              <option value="">---</option>
              <option value="pizza">Pizza</option>
              <option value="chocolate">Chocolate</option>
            </select>
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
          {name} {age === 0 ? "" : `(${age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} */}
        <p>{about}</p>
        <ul>
          {favoriteSeason && (
            <li>
              Favorite season:
              {favoriteSeason === "spring" && "🌸"}
              {favoriteSeason === "summer" && "☀"}
              {favoriteSeason === "autumn" && "🍂"}
              {favoriteSeason === "winter" && "❄"}
            </li>
          )}
          {likedHobbies && <li>Hobbies: {likedHobbies}</li>}
          {favoriteSnack && <li>Favorite snack: {favoriteSnack}</li>}
        </ul>
      </div>
    </div>
  )
}
