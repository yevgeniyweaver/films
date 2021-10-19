import Movie from "../Movie";
import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor')
  }
  componentDidMount() {
    console.log('didMount');
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldUpdate nextProps ', nextProps);
    console.log('shouldUpdate nextState ', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshot', prevProps);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('didUpdate prevProps ', prevProps);
    console.log('didUpdate prevState ', prevState);
  }

  render() {
    return (
      <div className="movies">
        {this.props.loading && !this.props.errorMessage ? (
          <span>loading...</span>
        ) : this.props.errorMessage ? (
          <div className="errorMessage">{this.props.errorMessage}</div>
        ) : (
          this.props.movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    )
  }
}
// const MovieList = (props) => {
//   return (
//     <div className="movies">
//       {props.loading && !props.errorMessage ? (
//         <span>loading...</span>
//       ) : props.errorMessage ? (
//         <div className="errorMessage">{props.errorMessage}</div>
//       ) : (
//         props.movies.map((movie, index) => (
//           <Movie key={`${index}-${movie.Title}`} movie={movie} />
//         ))
//       )}
//     </div>
//   )
// }

export default MovieList;
