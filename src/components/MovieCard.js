import React from "react";


const MovieCard = (props) => {
  return (
    <div className="mc">
        <div className="mc-title">{props.Title}</div>
        <div className="mc-poster">{props.errorMessage}</div>
    </div>
  )
}

export default MovieCard;
