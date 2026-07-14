import average from "../utils/average";

interface watched {
  id: number;
  title: string;
  year: string;
  poster: string;
  imdbrating: number;
  userrating: number;
  runtime: number;
}

interface WatchedSummaryProp {
  watched: watched[];
}

const WatchedSummary = (prop: WatchedSummaryProp) => {
  const { watched } = prop;
  const length = watched?.length || 0;
  const avgImdbRating = average(watched.map((w) => w.imdbrating));
  const avgRunTime = average(watched.map((w) => w.runtime));
  const avgUserRating = average(watched.map((w) => w.userrating));
  return (
    <div className="text-white shadow-2xl py-2 w-45 md:w-65 lg:w-100 bg-gray-600 flex flex-col gap-3 -mt-6 rounded-lg">
      <h3 className="pl-1.5 md:pl-2.5 lg:pl-10 text-sm md:text-lg lg:text-xl">
        MOVIES YOU WATCHED
      </h3>
      <div className="flex flex-row justify-center gap-2 lg:gap-4 text-[10px] md:text-[14px] lg:text-lg">
        <p className="flex flex-col items-center">
          <span>{length}</span>
          <span>movies</span>
        </p>
        <p className="flex flex-col items-center">
          <span>{avgImdbRating}</span>
          <span>imdbrating</span>
        </p>
        <p className="flex flex-col items-center">
          <span>{avgUserRating}</span>
          <span>userrating</span>
        </p>
        <p className="flex flex-col items-center">
          <span>{avgRunTime}</span>
          <span>min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedSummary;
