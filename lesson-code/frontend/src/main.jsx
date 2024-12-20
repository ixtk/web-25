import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { MovieWatchlist } from "./movie-watchlist/App"
// import { ProfileControlledInputs } from "./forms/AppWithOneState"
import { ProfileWithoutStates } from "./forms/AppWithoutStates"
import "./App.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MovieWatchlist /> */}
    <ProfileWithoutStates />
  </StrictMode>
)
