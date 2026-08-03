import WatchedMovie from "./WatchedMovie";
import type { WatchedType } from "../type/WatchedType";

interface WachtedMoviesListProp {
  watched: WatchedType[];
  handleDelete: (imdbId: string) => void;
  handleClickMovie: (imdbId: string) => void;
}

const WatchedMoviesList = (prop: WachtedMoviesListProp) => {
  const { watched, handleDelete, handleClickMovie } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 mt-3 pb-2">
      {watched.map((w) => (
        <WatchedMovie
          key={w.imdbID}
          Title={w.Title}
          handleDelete={handleDelete}
          handleClickMovie={handleClickMovie}
          imdbId={w.imdbID}
          Poster={w.Poster}
          imdbRating={w.imdbRating}
          Userrating={w.Userrating}
          Runtime={w.Runtime}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
