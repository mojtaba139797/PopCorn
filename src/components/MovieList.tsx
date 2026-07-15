import Movie from "./Movie";
import type MovieType from "../type/MovieType";

interface MovieListProp {
  movies: MovieType[];
}

const MovieList = (prop: MovieListProp) => {
  const { movies } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </ul>
  );
};

export default MovieList;
