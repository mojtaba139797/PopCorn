import Movie from "./Movie";
import type { MovieType } from "../type/MovieType";

interface MovieListProp {
  movies: MovieType[];
  handleClickMovie: (imdbId: string, showDetails: boolean) => void;
  showDetails: boolean;
}

const MovieList = (prop: MovieListProp) => {
  const {
    movies,
    handleClickMovie,
    showDetails,
  } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 pb-2">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          handleClickMovie={handleClickMovie}
          showDetails={showDetails}
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
