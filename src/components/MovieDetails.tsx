interface MovieDetailsProp {
  Poster: string;
  Title: string;
  Released: string;
  Runtime: string;
  Genre: string;
  imdbRating: string;
  Plot: string;
  Actors: string;
  Director: string;
  showDetails: boolean;
  handleClickBackButton: (showDetails: boolean) => void;
}

const MovieDetails = (prop: MovieDetailsProp) => {
  const {
    Poster,
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    handleClickBackButton,
    showDetails,
    Plot,
    Actors,
    Director,
  } = prop;
  return (
    <div id="details-Card" className="flex flex-col gap-5 md:gap-7">
      <div
        id="header"
        className="flex flex-row justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-36 md:h-40 gap-3 md:gap-4 mt-4"
      >
        <div className="relative w-1/2 h-full">
          <img
            src={Poster}
            alt={Title}
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            onClick={() => handleClickBackButton(showDetails)}
            className="absolute top-1 left-1 z-10 flex items-center justify-center bg-white cursor-pointer text-black text-[10px] md:text-sm lg:text-base w-8 md:w-10 h-8 md:h-10 rounded-full shadow"
          >
            Back
          </button>
        </div>

        <div className="flex flex-col justify-center w-1/2 gap-2 md:gap-3 text-white">
          <h2 className="text-sm md:text-lg lg:text-xl font-semibold">
            {Title}
          </h2>
          <div className="flex flex-row items-center gap-1 text-xs md:text-sm lg:text-base">
            <p>{Released}</p>
            <span>·</span>
            <p>{Runtime}</p>
          </div>
          <p className="text-xs md:text-sm lg:text-base">{Genre}</p>
          <p className="text-xs md:text-sm lg:text-base">
            {imdbRating} IMDB rating
          </p>
        </div>
      </div>
      <div id="addToList"></div>
      <div
        id="description"
        className="flex flex-col gap-3 px-2 pb-2 text-white text-xs md:text-sm lg:text-lg"
      >
        <p>{Plot}</p>
        <p>Starring {Actors}</p>
        <p>Directed by {Director}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
