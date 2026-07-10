import Movie from "./Movie";

interface movie {
  id: number;
  title: string;
  year: string;
  poster: string;
}

interface MovieListProp {
  movies: movie[];
}

const MovieList = (prop: MovieListProp) => {
  const { movies } = prop;
  return (
    <ul className=" flex flex-col gap-2 ml-2">
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
