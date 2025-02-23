import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { MovieWatchlist } from "./movie-watchlist/App"
// import { ProfileControlledInputs } from "./forms/App";
// import { ProfileControlledInputs } from "./forms/AppWithOneState"
// import { ProfileUncontrolledInputs } from "./forms/AppWithoutState"
import "./App.css"
// import { Spaceship } from "./my-little-spaceship/App"
// import { Spaceship as SpaceshipWithComponents } from "./my-little-spaceship/AppWithComponents"
import { Store } from "./store/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MovieWatchlist /> */}
    {/* <ProfileUncontrolledInputs /> */}
    {/* <Spaceship /> */}
    <Store />
  </StrictMode>
)
