import React, { useState }from "react";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../constants";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  const showFilmPlot = id => {

  }

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div onClick={()=>showFilmPlot(movie.id)}>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
