interface WatchedMovieProp {
  title: string;
  poster: string;
  year: string;
  imdbrating: number;
  userrating: number;
  runtime: number;
}

const WatchedMovie = (prop: WatchedMovieProp) => {
  const { title, poster, imdbrating, userrating, runtime } = prop;
  return (
    <li className="flex flex-row gap-2">
      <img
        src={poster}
        alt={`${title}poster`}
        className="w-15 h-15 text-white"
      />
      <div className="flex flex-col">
        <h3 className="text-white text-sm md:text-lg lg:text-xl">{title}</h3>
        <div className="flex flex-row gap-3">
          <p className="text-white">
            <span className="text-sm md:text-lg lg:text-xl">{imdbrating}</span>
          </p>
          <p className="text-white">
            <span className="text-sm md:text-lg lg:text-xl">{userrating}</span>
          </p>
          <p className="text-white text-sm md:text-lg lg:text-xl text-nowrap">
            <span>{runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default WatchedMovie;
