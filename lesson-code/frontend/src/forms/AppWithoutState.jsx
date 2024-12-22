import "./App.css"

export const ProfileUncontrolledInputs = () => {
  // const likedHobbies = Object.keys(hobbies)
  //   .filter((hobby) => {
  //     return hobbies[hobby]
  //   }) // Get keys where value is true
  //   .join(", ") // Join the hobbies into a string separated by commas

  const resetProfile = () => {
    // setName("")
    // setAge(0)
    // setUrl(
    //   "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    // )
    // setAbout("")
    // setFavoriteSeason("")
    // setHobbies({
    //   biking: false,
    //   coding: false,
    //   chess: false,
    //   reading: false
    // })
    // setFavoriteSnack("")
  }

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
            <button>Reset all</button>
          </div>
        </fieldset>
      </form>
      <div className="user-card"></div>
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
