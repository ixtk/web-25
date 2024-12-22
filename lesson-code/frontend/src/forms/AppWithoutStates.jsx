import "./App.css"
import { useState } from "react"

export const ProfileWithoutStates = () => {
  const [form, setForm] = useState({
    name: "",
    age: 0,
    url: "",
    about: "",
    favoriteSeason: "",
    hobbies: [],
    favoriteSnack: ""
  })

  const likedHobbies = form.hobbies.join(", ")

  const favoriteSeasonInputs = ["spring", "summer", "autumn", "winter"].map(
    (season) => {
      return (
        <label key={season}>
          <span>{season}</span>{" "}
          <input type="radio" value={season} name="season" />
        </label>
      )
    }
  )

  const hobbiesCheckboxes = ["biking", "coding", "chess"].map((hobby) => {
    return (
      <label key={hobby}>
        <span>{hobby}</span>{" "}
        <input type="checkbox" value={hobby} name="hobbies" />
      </label>
    )
  })

  const saveProfile = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    console.log(formData.getAll("hobbies"))

    const formDataAsObj = {
      ...Object.fromEntries(formData.entries()),
      hobbies: formData.getAll("hobbies")
    }

    if (formDataAsObj.name === "") {
      console.log("Username field is required")
    } else if (formDataAsObj.name.length < 3) {
      console.log("Username must be at least 3 characters")
    } else {
      setForm({
        ...Object.fromEntries(formData.entries()),
        hobbies: formData.getAll("hobbies")
      })
    }

    // console.log(formData.get("biking"))
    // console.log(formData.get("chess"))
    // console.log(formData.get("coding"))

    // console.log(formData.getAll("hobbies"))

    // console.log(
    //   formData.get("name"),
    //   formData.get("age"),
    //   formData.get("season"),
    //   formData.get("favoriteSnack")
    // )
  }

  return (
    <div className="container">
      <form onSubmit={saveProfile}>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="john doe" type="text" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input type="number" name="age" />
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
          <div style={{ marginBottom: "16px" }}>
            <h4>Hobbies</h4>
            {hobbiesCheckboxes}
          </div>
          <div>
            <h4>Favorite snack</h4>
            <select name="favoriteSnack">
              <option value="">--Please choose an option--</option>
              <option value="pizza">Pizza</option>
              <option value="chocolate">Chocolate</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit">Save profile</button>
            <button type="reset">Reset all</button>
          </div>
        </fieldset>
      </form>
      <div className="user-card">
        <img src={form.url} />
        <h1>
          {form.name} {form.age === 0 ? "" : `(${form.age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} */}
        <p>{form.about}</p>
        {form.favoriteSeason && (
          <h4>
            Favorite season:
            {form.favoriteSeason === "spring" && "🌸"}
            {form.favoriteSeason === "summer" && "☀"}
            {form.favoriteSeason === "autumn" && "🍂"}
            {form.favoriteSeason === "winter" && "❄"}
          </h4>
        )}
        {likedHobbies && <h4>User likes: {likedHobbies}</h4>}
        {form.favoriteSnack && <h4>Favorite snack: {form.favoriteSnack}</h4>}
      </div>
    </div>
  )
}
