interface MovieProp {
  title: string;
  year: string;
  poster: string;
}

const Movie = (prop: MovieProp) => {
  const { title, year, poster } = prop;
  return (
    <li className="flex flex-row gap-2">
      <img
        src={poster}
        alt={`${title}poster`}
        className="w-15 h-15 text-white"
      />
      <div className="flex flex-col">
        <h3 className="text-white text-sm md:text-lg lg:text-xl">{title}</h3>
        <p className="text-white">
          <span className="text-sm md:text-lg lg:text-xl">{year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
