interface WatchedMovieProp {
  Title: string;
  Poster: string;
  imdbRating: number;
  Userrating: number;
  Runtime: number;
}

const WatchedMovie = (prop: WatchedMovieProp) => {
  const { Title, Poster, imdbRating, Userrating, Runtime } = prop;
  return (
    <li className="flex flex-row gap-2">
      <img
        src={Poster}
        alt={`${Title}poster`}
        className="w-15 h-15 text-white"
      />
      <div className="flex flex-col">
        <h3 className="text-white text-sm md:text-lg lg:text-xl">{Title}</h3>
        <div className="flex flex-row gap-3">
          <p className="text-white">
            <span className="text-sm md:text-lg lg:text-xl">{imdbRating}</span>
          </p>
          <p className="text-white">
            <span className="text-sm md:text-lg lg:text-xl">{Userrating}</span>
          </p>
          <p className="text-white text-sm md:text-lg lg:text-xl text-nowrap">
            <span>{Runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default WatchedMovie;
