import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Movie, { MovieEntity } from "./components/movie";
import axios from "axios";
import styled from "styled-components";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

type RootState = {
  loading: boolean;
  movies?: MovieEntity[];
  errorMessage?: string | null;
};
type Action = {
  type:
    | "SEARCH_MOVIES_REQUEST"
    | "SEARCH_MOVIES_SUCCESS"
    | "SEARCH_MOVIES_FAILURE";
  payload?: MovieEntity[];
  error?: string;
};
type APIRes = {
  Search: MovieEntity[];
  totalResults: number;
  Response: string;
};

const initialState: RootState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer: React.Reducer<RootState, Action> = (
  state: RootState,
  action: Action
) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get<APIRes>(MOVIE_API_URL)
      .then()
      .then((result) => {
        console.log("result :");
        console.log(result);
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: result.data.Search,
        });
      });
  }, []);

  const search = (searchValue: string) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  console.log(movies);
  return (
    <StyledApp>
      <Header text="HOOKED" />
      <Search search={search} />
      <p>Sharing a few of our favourite movies</p>
      <StyledMovies>
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        ) : (
          (movies as MovieEntity[]).map((movie: MovieEntity, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </StyledMovies>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  text-align: center;

  & p {
    font-size: large;
  }
`;

const StyledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const StyledErrorMessage = styled.div`
  margin: auto;
  font-weight: bold;
  color: rgb(161, 15, 15);
`;

export default App;
