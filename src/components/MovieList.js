import Movie from "./Movie";
import React from "react";


const MovieList = (props) => {
  return (
    <div className="movies">
      {props.loading && !props.errorMessage ? (
        <span>loading...</span>
      ) : props.errorMessage ? (
        <div className="errorMessage">{props.errorMessage}</div>
      ) : (
        props.movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        ))
      )}
    </div>
  )
}

export default MovieList;
