import WatchedMovie from "./WatchedMovie";
import type { WatchedType } from "../type/WatchedType";

interface WachtedMoviesListProp {
  watched: WatchedType[];
}

const WatchedMoviesList = (prop: WachtedMoviesListProp) => {
  const { watched } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 mt-3 pb-2">
      {watched.map((w) => (
        <WatchedMovie
          key={w.imdbID}
          Title={w.Title}
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
