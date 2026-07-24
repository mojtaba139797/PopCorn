import Movie from "./Movie";
import type { MovieType } from "../type/MovieType";

interface MovieListProp {
  movies: MovieType[];
}

const MovieList = (prop: MovieListProp) => {
  const { movies } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 pb-2">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          Poster={movie.Poster}
        />
      ))}
    </ul>
  );
};

export default MovieList;
