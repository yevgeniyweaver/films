import React, { useState, useEffect, useReducer } from "react";
import '../App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Movie from "./Movie";
import MovieList from "./MovieList/MovieList";
import Search from "./Search/Search";
import { reducer } from "./../reducers/movieLoad";
import { API_KEY } from "../constants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
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
  const [mainState, setMainState] = useState([]);


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
  const setMain = (value) => {
    setMainState(value);
    console.log(mainState)
  }
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
  let machine = {
    sfera: 1
  }
  let auto = {
    speed: 180,
    mark: 'Toyota',
    __proto__: machine,
  }
  let reno = {
    mark: 'Renault',
  }
  let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
      console.log(value.split(" "))
    },
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  user.fullName = 'Vasia Pupkin';
  console.log(user.name)
  console.log(user.surname)





  reno.__proto__ = auto;
  console.log(reno.mark)
  console.log(reno.speed)
  console.log(reno.sfera)

  //apiUrl('oven');
  return (

    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <MovieList />
            </Route>
            <Route path="/">
              {/*<MovieCard />*/}
            </Route>
          </Switch>
        </div>
      </Router>


      <Header text="FilmoRating" setState={setMain} />
      <Search search={search} />
      <main>
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {loading && !errorMessage ? (
            <span>loading...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      </main>
      <Footer text="Filmorating@org"/>
    </div>
  );
}

export default App;
