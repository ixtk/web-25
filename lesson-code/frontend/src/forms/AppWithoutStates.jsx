import "./App.css"

export const ProfileWithoutStates = () => {
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
        <span>{hobby}</span> <input type="checkbox" name={hobby} />
      </label>
    )
  })

  const saveProfile = (event) => {
    event.preventDefault()

    // console.log(event.target)
    const formData = new FormData(event.target)

    console.log(
      formData.get("name"),
      formData.get("age"),
      formData.get("season")
    )
  }

  return (
    <div className="container">
      <form onSubmit={saveProfile}>
        <fieldset>
          <legend>Create Profile</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <div className="age-container">
              <input type="number" name="age" />
            </div>
          </div>
          <div>
            <label htmlFor="avatarUrl">Avatar URL</label>
            <input type="url" name="url" />
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
            <button>Reset all</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

/*
      <div className="user-card">
        <img src={url} />
        <h1>
          {name} {age === 0 ? "" : `(${age})`}
        </h1>
        {/* {age !== null && <span>({age})</span>} */
//   <p>{about}</p>
//   {favoriteSeason && (
//     <h4>
//       Favorite season:
//       {favoriteSeason === "spring" && "🌸"}
//       {favoriteSeason === "summer" && "☀"}
//       {favoriteSeason === "autumn" && "🍂"}
//       {favoriteSeason === "winter" && "❄"}
//     </h4>
//   )}
//   {likedHobbies && <h4>User likes: {likedHobbies}</h4>}
//   {favoriteSnack && <h4>Favorite snack: {favoriteSnack}</h4>}
// </div>
