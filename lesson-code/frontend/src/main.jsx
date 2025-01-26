import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { MovieWatchlist } from "./movie-watchlist/App"
// import { ProfileControlledInputs } from "./forms/AppWithOneState"
// import { ProfileControlledInputs } from "./forms/App"
// import { ProfileWithoutStates } from "./forms/AppWithoutStates"
// import { FormsPlayground } from "./forms-playground/App"
// import { ProfileControlledInputs } from "./forms/App"
import "./App.css"
import { Spaceship } from "./my-little-spaceship/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ProfileControlledInputs /> */}
    {/* <FormsPlayground /> */}
    {/* <MovieWatchlist /> */}
    {/* <ProfileWithoutStates /> */}
    <Spaceship />
  </StrictMode>
)
