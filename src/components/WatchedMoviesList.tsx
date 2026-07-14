import WatchedMovie from "./WatchedMovie";

interface WatchedMovie {
  id: number;
  title: string;
  poster: string;
  year: string;
  imdbrating: number;
  userrating: number;
  runtime: number;
}

interface WachtedMoviesListProp {
  watched: WatchedMovie[];
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
