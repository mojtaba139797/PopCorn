interface MovieProp {
  Title: string;
  Year: string;
  Poster: string;
}

const Movie = (prop: MovieProp) => {
  const { Title, Year, Poster } = prop;
  return (
    <li className="flex flex-row gap-2">
      <img
        src={Poster}
        alt={`${Title}poster`}
        className="w-15 h-15 text-white"
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
