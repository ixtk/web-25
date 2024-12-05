import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import { MovieWatchlist } from "./movie-watchlist/App"
import { ProfileControlledInputs } from "./forms/App"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MovieWatchlist /> */}
    <ProfileControlledInputs />
  </StrictMode>
)
