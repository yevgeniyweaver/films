import React, { useEffect, useReducer } from "react";
import '../App.css';
import Header from "./Header/Header";
import MovieList from "./MovieList/MovieList";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import { reducer } from "./../reducers/movieLoad";
import { API_KEY } from "../constants";
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // eslint-disable-next-line
  useRouteMatch,
  // eslint-disable-next-line
  useParams
} from "react-router-dom";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage, loading } = state;
  //const [mainState, setMainState] = useState([]);


  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {

        console.log('init movies with man')

        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
        // setMovies(jsonResponse.Search);
        // setLoading(false);
      });
  }, []);
  // const setMain = (value) => {
  //   setMainState(value)
  // }
// eslint-disable-next-line
  const apiUrl = (searchValue) => {
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log(jsonResponse.Search)
          // setMovies(jsonResponse.Search);
          // setLoading(false);
        } else {
          // setErrorMessage(jsonResponse.Error);
          // setLoading(false);
        }
      });
  }

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
    // setLoading(true);
    // setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          console.log(`search with: "${searchValue}"`)
          console.log(jsonResponse.Search)

          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
          // setMovies(jsonResponse.Search);
          // setLoading(false);
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
          // setErrorMessage(jsonResponse.Error);
          // setLoading(false);
        }
      });
  };
  console.log(state)
  return (

    <div className="App">
      <Router>
        <div className="main">
          <Header text="FilmoRating" />
          <Search search={search} />
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/genre/:genreId">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
          </div>
          <main>
            <div className="App-intro">Sharing a few of our favourite movies</div>
            <Switch>
              <Route exact path="/">
                <MovieList movies={movies} errorMessage={errorMessage} loading={loading}/>
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );

}

export default App;
