import { useState } from "react";
import "./App.css";

export const StarWarsFetch = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterInfo, setCharacterInfo] = useState({
    name: "",
    birthYear: "",
    planetPopulation: "",
    planetTerrain: "",
    planetName: ""
  })
  const [errorMsg, setErrorMsg] = useState("")

  const searchCharacter = async () => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${characterName}`)
    const characterJson = await response.json()

    if (characterJson.results.length === 0) {
      setErrorMsg("Character name is invalid")
      return
    }

    const character = characterJson.results[0]

    const planetResponse = await fetch(character.homeworld)
    const planetJson = await planetResponse.json()

    setCharacterInfo({
      name: character.name,
      birthYear: character.birth_year,
      planetPopulation: planetJson.population,
      planetTerrain: planetJson.terrain,
      planetName: planetJson.name
    })
  }

  return (
    <div>
      <h1>Star wars fetch</h1>
      <input
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        type="text"
      />
      <span>{errorMsg}</span>
      <ul>
        <li>{characterInfo.name}</li>
        <li>{characterInfo.birthYear}</li>
        <li>{characterInfo.planetName}</li>
        <li>{characterInfo.planetPopulation}</li>
        <li>{characterInfo.planetTerrain}</li>
      </ul>
      <button onClick={searchCharacter}>Search</button>
    </div>
  );
};
