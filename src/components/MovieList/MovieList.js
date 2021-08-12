import Movie from "../Movie";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";


const MovieList = (props) => {
  let match = useRouteMatch();
  return (
    <div className="movies">
      {props.loading && !props.errorMessage ? (
        <span>loading...</span>
      ) : props.errorMessage ? (
        <div className="errorMessage">{props.errorMessage}</div>
      ) : (
        <ul>
          {props.movies.map((movie, index) => (
          <li key={`${index}`}>
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          </li>
        ))}
        </ul>
      )}
      <Switch>
        <Route path={`${match.path}/:titleId`} component={MovieCard} />
      </Switch>
    </div>
  )
}

export default MovieList;
