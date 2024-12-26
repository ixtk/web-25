import { useState } from "react"
import "./App.css"

export const ProfileUncontrolledInputs = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    url: "",
    about: "",
    favoriteSeason: "",
    hobbies: [],
    favoriteSnack: ""
  })

  const likedHobbies = profile.hobbies.join(", ")

  const favoriteSeasonInputs = ["spring", "summer", "autumn", "winter"].map(
    (season) => {
      return (
        <label key={season}>
          {season} <input type="radio" value={season} name="season" />
        </label>
      )
    }
  )

  const hobbiesCheckboxes = ["chess", "coding", "biking"].map((hobby) => {
    return (
      <label key={hobby}>
        {hobby} <input type="checkbox" value={hobby} name="hobbies" />
      </label>
    )
  })

  const saveProfile = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    // console.log(formData.getAll("hobbies"))

    // console.log(formData.get("biking"))
    // console.log(formData.get("coding"))
    // console.log(formData.get("chess"))

    // console.log(Object.fromEntries(formData.entries()))

    console.log({
      ...Object.fromEntries(formData.entries()),
      hobbies: formData.getAll("hobbies")
    })

    setProfile({
      ...Object.fromEntries(formData.entries()),
      hobbies: formData.getAll("hobbies")
    })

    // console.log(
    //   formData.get("age"),
    //   formData.get("name"),
    //   formData.get("url"),
    //   formData.get("season")
    // )
  }

  return (
    <div className="container">
      <form onSubmit={saveProfile}>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input type="number" name="age" />
              <button
              // onClick={() => {
              //   setAge(age + 5)
              // }}
              >
                +5
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input
              defaultValue="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              type="url"
              name="url"
            />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea name="about" />
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
            <select name="favoriteSnack">
              <option value="">---</option>
              <option value="pizza">Pizza</option>
              <option value="chocolate">Chocolate</option>
            </select>
          </div>
          <div className="button-container">
            <button>Save profile</button>
            <button type="reset">Reset all</button>
          </div>
        </fieldset>
      </form>
      <div className="user-card">
        <img src={profile.url} />
        <h1>
          {profile.name} {profile.age === 0 ? "" : `(${profile.age})`}
        </h1>
        {profile.age !== null && <span>({profile.age})</span>}
        <p>{profile.about}</p>
        <ul>
          {profile.favoriteSeason && (
            <li>
              Favorite season:
              {profile.favoriteSeason === "spring" && "🌸"}
              {profile.favoriteSeason === "summer" && "☀"}
              {profile.favoriteSeason === "autumn" && "🍂"}
              {profile.favoriteSeason === "winter" && "❄"}
            </li>
          )}
          {likedHobbies && <li>Hobbies: {likedHobbies}</li>}
          {profile.favoriteSnack && (
            <li>Favorite snack: {profile.favoriteSnack}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

{
  /* <img src={url} />
        <h1>
          {name} {age === 0 ? "" : `(${age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} 
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
        </ul> */
}
