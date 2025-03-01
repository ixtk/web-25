import { useState } from "react"
import "./App.css"

export function StarWarsFetch() {
  const [characterName, setCharacterName] = useState("")
  const [characterInfo, setCharacterInfo] = useState({
    birthYear: "",
    name: "",
    planetPopulation: "",
    planetTerrain: "",
    planetName: ""
  })
  const [loading, setLoading] = useState(false)

  const searchCharacterInfo = async (e) => {
    e.preventDefault()
    setLoading(true)

    // TODO: error handling, clear input

    const characterResponseObj = await fetch(
      `https://swapi.dev/api/people/?search=${characterName}`
    )
    const characterJson = await characterResponseObj.json()

    const planetResponseObj = await fetch(characterJson.results[0].homeworld)
    const planetJson = await planetResponseObj.json()
    console.log(planetJson)

    setCharacterInfo({
      birthYear: characterJson.results[0].birth_year,
      name: characterJson.results[0].name,
      planetName: planetJson.name,
      planetPopulation: planetJson.population,
      planetTerrain: planetJson.terrain
    })
    setLoading(false)
  }

  return (
    <>
      <form onSubmit={searchCharacterInfo} style={{ maxWidth: "500px" }}>
        <h1>Star wars fetch</h1>
        <fieldset role="group">
          <input
            type="text"
            placeholder="Search character"
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button type="submit">Search</button>
        </fieldset>
      </form>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {characterInfo.name && <li>Name: {characterInfo.name}</li>}
            {characterInfo.birthYear && (
              <li>Birth Year: {characterInfo.birthYear}</li>
            )}
            <ul>
              {characterInfo.planetName && (
                <li>Planet Name: {characterInfo.planetName}</li>
              )}
              {characterInfo.planetPopulation && (
                <li>Planet Poupulation: {characterInfo.planetPopulation}</li>
              )}
              {characterInfo.planetTerrain && (
                <li>Planet Terrain: {characterInfo.planetTerrain}</li>
              )}
            </ul>
          </ul>
        )}
      </div>
    </>
  )
}
