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
          key={w.id}
          Title={w.Title}
          Poster={w.Poster}
          Year={w.Year}
          imdbrating={w.imdbrating}
          userrating={w.userrating}
          runtime={w.runtime}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
