import React from "react";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../constants";
import {Link} from "react-router-dom";


const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <Link className="movie" to={`/title/${movie.id}`}>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </Link>
  );
};

export default Movie;
