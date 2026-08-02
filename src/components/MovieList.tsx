import Movie from "./Movie";
import type { MovieType } from "../type/MovieType";

interface MovieListProp {
  movies: MovieType[];
  handleClickMovie: (imdbId: string) => void;
}

const MovieList = (prop: MovieListProp) => {
  const { movies, handleClickMovie } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 pb-2">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          handleClickMovie={handleClickMovie}
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
