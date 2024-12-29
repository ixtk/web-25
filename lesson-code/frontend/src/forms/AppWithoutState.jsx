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
  // const [formErrors, setFormErrors] = useState({ name: "", age: "" })
  const [nameError, setNameError] = useState("")
  const [ageError, setAgeError] = useState("")

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

    setAgeError("")
    setNameError("")

    const formDataAsObj = {
      ...Object.fromEntries(formData.entries()),
      hobbies: formData.getAll("hobbies")
    }

    console.log(formDataAsObj)
    // console.log(18 <= Number(formDataAsObj.age) < 100)

    let valid = true
    if (formDataAsObj.name.length === 0) {
      setNameError("Name is required")
      valid = false
      // console.log("Name is required")
    } else if (formDataAsObj.name.length < 3) {
      setNameError("Minimum 3 characters")
      valid = false
      console.log("Minimum 3 characters")
    }

    if (Number(formDataAsObj.age) < 18 || Number(formDataAsObj.age) > 100) {
      valid = false
      setAgeError("Age must be between 18-100")
      console.log("Age must be between 18-100")
    }

    if (valid) {
      setProfile({
        ...Object.fromEntries(formData.entries()),
        hobbies: formData.getAll("hobbies")
      })
    }

    // console.log(
    //   formData.get("age"),
    //   formData.get("name"),
    //   formData.get("url"),
    //   formData.get("season")
    // )
  }

  const validateName = (event) => {
    // console.log("Running!")
    setNameError("")
    if (event.target.value.length === 0) {
      setNameError("Name is required")
    } else if (event.target.value.length < 3) {
      setNameError("Minimum 3 characters")
    }
  }

  // onSubmit, onBlur, onChange

  return (
    <div className="container">
      <form onSubmit={saveProfile}>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              onBlur={validateName}
              // onChange={validateName}
            />
            {nameError !== "" && (
              <span style={{ color: "red" }}>{nameError}</span>
            )}
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input type="number" name="age" />
              {ageError !== "" && (
                <span style={{ color: "red" }}>{ageError}</span>
              )}
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
