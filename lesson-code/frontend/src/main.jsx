import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MovieWatchlist } from "./movie-watchlist/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieWatchlist />
  </StrictMode>
);
