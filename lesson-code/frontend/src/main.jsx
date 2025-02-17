import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./App.css"

// import { MovieWatchlist } from "./movie-watchlist/App"
// import { ProfileControlledInputs } from "./forms/AppWithOneState"
// import { ProfileControlledInputs } from "./forms/App"
// import { ProfileWithoutStates } from "./forms/AppWithoutStates"
// import { FormsPlayground } from "./forms-playground/App"
// import { ProfileControlledInputs } from "./forms/App"
// import { Spaceship } from "./my-little-spaceship/App"
import { Spaceship as SpaceshipWithComponents } from "./my-little-spaceship/AppWithComponents"
// import { ProductsPlayground } from "./products-playground/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ProfileControlledInputs /> */}
    {/* <FormsPlayground /> */}
    {/* <MovieWatchlist /> */}
    {/* <ProfileWithoutStates /> */}
    <SpaceshipWithComponents />
    {/* <ProductsPlayground /> */}
  </StrictMode>
)
