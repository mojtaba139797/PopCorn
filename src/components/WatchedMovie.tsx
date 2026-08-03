import zarbdar from "../assets/zarbdar.png";

interface WatchedMovieProp {
  Title: string;
  Poster: string;
  imdbRating: number;
  Userrating: number;
  Runtime: number;
  imdbId: string;
  handleDelete: (imdbId: string) => void;
  handleClickMovie: (imdbId: string) => void;
}

const WatchedMovie = (prop: WatchedMovieProp) => {
  const {
    Title,
    Poster,
    imdbRating,
    Userrating,
    Runtime,
    handleDelete,
    handleClickMovie,
    imdbId,
  } = prop;
  return (
    <li
      onClick={() => handleClickMovie(imdbId)}
      className="flex items-center cursor-pointer pr-2"
    >
      <img
        src={Poster}
        alt={`${Title}poster`}
        className="w-15 h-15 text-white"
      />
      <div id="info" className="flex flex-col flex-1 ml-3">
        <h3 className="text-white text-[10px] md:text-sm lg:text-lg">
          {Title}
        </h3>
        <div
          id="details"
          className="flex flex-row gap-2 items-center text-white text-[10px] md:text-sm lg:text-lg"
        >
          <p>
            <span>{imdbRating}</span>
          </p>
          <p>
            <span>{Userrating}</span>
          </p>
          <p className="text-nowrap ">
            <span>{Runtime} min</span>
          </p>
        </div>
      </div>
      <img
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(imdbId);
        }}
        src={zarbdar}
        alt="zarbdar"
        className="w-5 h-5"
      />
    </li>
  );
};

export default WatchedMovie;
