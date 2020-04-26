import React from "react";
import styled from "styled-components";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export type MovieEntity = {
  Poster: string;
  Title: string;
  Year: string;
};

export type MovieProps = {
  movie: MovieEntity;
};

const Movie: React.FC<MovieProps> = (props: MovieProps) => {
  const poster =
    props.movie.Poster === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : props.movie.Poster;
  return (
    <SyledMovie>
      <h2>{props.movie.Title}</h2>
      <div>
        <MovieImg title={props.movie.Title} poster={poster} />
      </div>
      <p>({props.movie.Year})</p>
    </SyledMovie>
  );
};

const SyledMovie = styled.div`
  padding: 5px 25px 10px 25px;
  max-width: 25%;
  @media screen and (min-width: 694px) and (max-width: 915px) {
    max-width: 33%;
  }

  @media screen and (min-width: 652px) and (max-width: 693px) {
    max-width: 50%;
  }

  @media screen and (max-width: 651px) {
    max-width: 100%;
    margin: auto;
  }
`;

type StyledMovieProps = {
  title: string;
  poster: string;
};

const MovieImg = styled.img<StyledMovieProps>`
  width: 200;
  alt: ${(props) => `The movie titled: ${props.title}`};
  src: ${(props) => props.poster};
`;

export default Movie;
