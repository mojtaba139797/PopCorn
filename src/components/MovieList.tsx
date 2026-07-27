import Movie from "./Movie";
import type { MovieType } from "../type/MovieType";
import { useState } from "react";

interface MovieListProp {
  movies: MovieType[];
  setSelectedId: (selectedId: string) => void;
}

const MovieList = (prop: MovieListProp) => {
  const { movies, setSelectedId } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 pb-2">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          setSelectedId={setSelectedId}
          imdbId={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          Poster={movie.Poster}
        />
      ))}
    </ul>
  );
};

export default MovieList;
