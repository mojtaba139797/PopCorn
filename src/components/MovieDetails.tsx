import NumRate from "./NumRate";
import arrNumRate from "../constants/arrNumRate";
import type { WatchedType } from "../type/WatchedType";
import type { MovieDetailsType } from "../type/MovieDetailsType";

interface MovieDetailsProp {
  movieDetails: MovieDetailsType | null;
  selectedId?: string;
  rate: number;
  setRate: (nweRate: number) => void;
  watched: WatchedType[];
  setWatched: React.Dispatch<React.SetStateAction<WatchedType[]>>;
  handleClickBackButton: () => void;
}

const MovieDetails = (prop: MovieDetailsProp) => {
  const {
    handleClickBackButton,
    rate,
    movieDetails,
    selectedId,
    watched,
    setRate,
    setWatched,
  } = prop;

  const handleAddToList = () => {
    const exists = watched.some((movie) => movie.imdbID === selectedId);
    if (exists) return;
    if (!selectedId) return;
    if (!movieDetails) return;
    const watchedMovie: WatchedType = {
      imdbID: selectedId,
      Title: movieDetails.Title,
      Poster: movieDetails.Poster,
      Runtime: movieDetails.Runtime,
      imdbRating: movieDetails.imdbRating,
      Userrating: rate,
    };
    setWatched((prev) => [...prev, watchedMovie]);
    handleClickBackButton();
  };
  if (!movieDetails) {
    return null;
  }
  console.log(movieDetails);

  return (
    <div id="details-Card" className="flex flex-col gap-5 md:gap-9">
      <div
        id="header"
        className="flex flex-row justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-36 md:h-40 gap-3 md:gap-4 mt-4"
      >
        <div className="relative w-1/2 h-full">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            onClick={() => handleClickBackButton()}
            className="absolute top-1 left-1 z-10 flex items-center justify-center bg-white cursor-pointer text-black text-[10px] md:text-sm lg:text-base w-8 md:w-10 h-8 md:h-10 rounded-full shadow"
          >
            Back
          </button>
        </div>

        <div className="flex flex-col justify-center w-1/2 gap-2 md:gap-3 text-white">
          <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
            {movieDetails.Title}
          </h2>
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm lg:text-base">
            <p>{movieDetails.Released}</p>
            <span>·</span>
            <p>{movieDetails.Runtime}min</p>
          </div>
          <p className="text-xs md:text-sm lg:text-base">
            {movieDetails.Genre}
          </p>
          <p className="text-xs md:text-sm lg:text-base">
            {movieDetails.imdbRating} IMDB rating
          </p>
        </div>
      </div>
      <div
        id="addToList"
        className="px-2 py-2 md:py-4 lg:py-6 flex flex-col gap-3 md:gap-5 lg:gap-7 bg-gray-600 mx-2 rounded"
      >
        <p className="text-[10px] md:text-xs lg:text-base text-white">
          Rate it:
        </p>
        <div id="NumRate-Container" className="flex flex-row gap-1">
          {arrNumRate.map((Num) => (
            <NumRate content={Num} rate={rate} setRate={setRate} />
          ))}
        </div>
        <span
          className={`text-yellow-400 flex flex-row gap-1 text-[10px] md:text-xs lg:text-base pl-[32%] md:pl-[37%] ${rate === 0 ? "hidden" : "block"}`}
        >
          <p
            className={`text-white text-[10px] md:text-xs lg:text-base ${rate > 0 ? "block" : "hidden"}`}
          >
            your rate :
          </p>
          {rate}
        </span>
        <button
          id="Add to list"
          disabled={rate === 0}
          onClick={handleAddToList}
          className={` ${rate === 0 ? "bg-purple-300" : "bg-purple-700"} ${rate === 0 ? "hover:bg-purple-300" : "hover:bg-purple-800"} cursor-pointer text-[10px] md:text-xs lg:text-base font-semibold py-1 md:py-2 lg:py-3 text-white rounded-full`}
        >
          + Add to list
        </button>
      </div>
      <div
        id="description"
        className="flex flex-col gap-3 px-2 pb-2 text-white text-xs md:text-sm lg:text-lg"
      >
        <p>{movieDetails.Plot}</p>
        <p>Starring {movieDetails.Actors}</p>
        <p>Directed by {movieDetails.Director}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
