// MovieCard.jsx
import React from "react";
// import App from './App';
// import "./MovieCss.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Title}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Year}</h3>
        <h3>{movie.Plot}</h3>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
