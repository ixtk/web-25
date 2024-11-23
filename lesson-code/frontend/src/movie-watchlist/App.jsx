import "./App.css";
import { useState } from "react";

export const MovieWatchlist = () => {
  const [newMovie, setNewMovie] = useState("");
  const [movies, setMovies] = useState([
    { title: "Inception", isChecked: true },
    { title: "The LEGO movie", isChecked: false },
    { title: "Garfield", isChecked: true },
  ]);
  const [error, setError] = useState("");

  const watchedMovies = movies.filter((movieObj) => {
    if (movieObj.isChecked) return true;
    else return false;
  });

  const percentage = (watchedMovies.length / movies.length) * 100;

  const addMovie = () => {
    if (newMovie === "") {
      setError("Movie name is not allowed to be blank");
    } else if (movies.includes(newMovie)) {
      setError("Movie is already added");
    } else if (/^\d+$/.test(newMovie)) {
      setError("Movie name is invalid");
    } else {
      const newMovieToAdd = { title: newMovie, isChecked: false };

      const newMovies = [newMovieToAdd, ...movies];
      setMovies(newMovies);
      setError("");
      setNewMovie("");
    }
  };

  const updateNewMovieText = (event) => {
    setNewMovie(event.target.value);
  };

  const removeMovie = (movieTitleToDelete) => {
    const newMovies = movies.filter((movieObj) => {
      // return title !== movieTitleToDelete
      if (movieObj.title === movieTitleToDelete) return false;
      else return true;
    });

    setMovies(newMovies);
  };

  const toggleCheckMovie = (movieTitleToCheck) => {
    // console.log("Checking", movieTitleToCheck)
    const newMovies = movies.map((movieObj) => {
      if (movieObj.title === movieTitleToCheck) {
        // movieObj.isChecked = !movieObj.isChecked
        return { title: movieObj.title, isChecked: !movieObj.isChecked };
      } else {
        return movieObj;
      }

      // return movieObj
    });
    setMovies(newMovies);
  };

  return (
    <div className="container">
      <h1>Movie Watchlist 🎥🍿</h1>
      <span>{Math.floor(percentage)}%</span>
      <progress value={percentage} max={100}></progress>
      <h2>Text is: {newMovie}</h2>
      <div>
        <input
          onChange={updateNewMovieText}
          type="text"
          placeholder="Movie name..."
        />
        <div>
          <span style={{ color: "red" }}>{error}</span>
        </div>
        <button onClick={addMovie}>Add</button>
      </div>
      <ul>
        {movies.map((movieObj) => {
          // console.log(movieObj)
          return (
            <li key={movieObj.title}>
              <span className={movieObj.isChecked ? "checked" : ""}>
                {movieObj.title}
              </span>
              <button
                onClick={() => {
                  removeMovie(movieObj.title);
                }}
                style={{ marginLeft: "16px" }}
              >
                Delete
              </button>
              <button
                onClick={() => toggleCheckMovie(movieObj.title)}
                style={{ marginLeft: "16px" }}
              >
                {movieObj.isChecked ? "Uncheck" : "Check"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
