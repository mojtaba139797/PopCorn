import type { MovieType } from "../type/MovieType";

interface NumResultsProp {
  movies: MovieType[];
}

const NumResults = (prop: NumResultsProp) => {
  const { movies } = prop;
  const Results = movies.length;
  return (
    <div>
      <p className="text-sm md:text-lg lg:text-xl">
        Found <strong>{Results}</strong> results
      </p>
    </div>
  );
};

export default NumResults;
