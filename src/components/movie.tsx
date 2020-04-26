import React from "react";

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
    <div className="movie">
      <h2>{props.movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${props.movie.Title}`}
          src={poster}
        />
      </div>
      <p>({props.movie.Year})</p>
    </div>
  );
};

export default Movie;
