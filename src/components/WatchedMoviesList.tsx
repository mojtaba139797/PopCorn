import WatchedMovie from "./WatchedMovie";
import type WatchedType from "../type/WatchedType";

interface WachtedMoviesListProp {
  watched: WatchedType[];
}

const WatchedMoviesList = (prop: WachtedMoviesListProp) => {
  const { watched } = prop;
  return (
    <ul className=" flex flex-col gap-3 ml-4 mt-3">
      {watched.map((w) => (
        <WatchedMovie
          key={w.id}
          title={w.title}
          poster={w.poster}
          year={w.year}
          imdbrating={w.imdbrating}
          userrating={w.userrating}
          runtime={w.runtime}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
