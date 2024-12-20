import "./App.css"
import { useState } from "react"

const defaultFormValues = {
  name: "",
  age: 0,
  url: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
  about: "",
  favoriteSeason: "",
  hobbies: {
    biking: false,
    chess: false,
    coding: false,
    reading: false
  },
  favoriteSnack: ""
}

export const ProfileControlledInputs = () => {
  const [form, setForm] = useState(defaultFormValues)

  const likedHobbies = Object.keys(form.hobbies)
    .filter((hobby) => {
      return form.hobbies[hobby]
    }) // Get keys where value is true
    .join(", ") // Join the hobbies into a string separated by commas

  const resetProfile = () => {
    setForm(defaultFormValues)
  }

  const updateFormField = (event) => {
    // setForm({
    //   ...form,
    //   favoriteSeason: "spring"
    // })

    const { name, value, checked, type } = event.target

    if (type !== "checkbox") {
      setForm({
        ...form,
        [name]: value
      })
    } else {
      setForm({
        ...form,
        hobbies: {
          ...form.hobbies,
          [name]: !form.hobbies[name] // or checked
        }
      })
    }

    // console.log(
    //   event.target.value,
    //   event.target.checked,
    //   event.target.type,
    //   event.target.name
    // )
  }

  const favoriteSeasonInputs = ["spring", "summer", "autumn", "winter"].map(
    (season) => {
      return (
        <label key={season}>
          {season}{" "}
          <input
            type="radio"
            value={season}
            checked={form.favoriteSeason === season}
            onChange={updateFormField}
            name="favoriteSeason"
          />
        </label>
      )
    }
  )

  const hobbiesCheckboxes = Object.keys(form.hobbies).map((hobby) => {
    return (
      <label key={hobby}>
        {hobby}{" "}
        <input
          type="checkbox"
          name={hobby}
          checked={form.hobbies[hobby]}
          onChange={updateFormField}
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
              name="name"
              onChange={updateFormField}
              value={form.name}
              required
              minLength={3}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input
                type="number"
                name="age"
                value={form.age === 0 ? "" : form.age}
                onChange={updateFormField}
              />
              <button
                onClick={() => {
                  // setAge(age + 5)
                }}
              >
                +5
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input
              type="url"
              name="url"
              value={form.url}
              onChange={updateFormField}
            />
          </div>
          <div>
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              value={form.about}
              onChange={updateFormField}
            />
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
              name="favoriteSnack"
              value={form.favoriteSnack}
              onChange={updateFormField}
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
        <img src={form.url} />
        <h1>
          {form.name} {form.age === 0 ? "" : `(${form.age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} */}
        <p>{form.about}</p>
        <ul>
          {form.favoriteSeason && (
            <li>
              Favorite season:
              {form.favoriteSeason === "spring" && "🌸"}
              {form.favoriteSeason === "summer" && "☀"}
              {form.favoriteSeason === "autumn" && "🍂"}
              {form.favoriteSeason === "winter" && "❄"}
            </li>
          )}
          {likedHobbies && <li>Hobbies: {likedHobbies}</li>}
          {form.favoriteSnack && <li>Favorite snack: {form.favoriteSnack}</li>}
        </ul>
      </div>
    </div>
  )
}
