interface MovieProp {
  Title: string;
  Year: string;
  Poster: string;
  imdbId: string;
  setSelectedId: (selectedId: string) => void;
}
const Movie = (prop: MovieProp) => {
  const { Title, Year, Poster, imdbId, setSelectedId } = prop;
  return (
    <li
      onClick={() => setSelectedId(imdbId)}
      className="flex flex-row gap-2 cursor-pointer hover:shadow-xl hover:bg-gray-600 hover:transition-all duration-300 ease-in-out border-b border-b-gray-500"
    >
      <img
        src={Poster}
        alt={`${Title}poster`}
        className="w-15 h-15 text-white p-1.5"
      />
      <div className="flex flex-col">
        <h3 className="text-white text-sm md:text-lg lg:text-xl">{Title}</h3>
        <p className="text-white">
          <span className="text-sm md:text-lg lg:text-xl">{Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
