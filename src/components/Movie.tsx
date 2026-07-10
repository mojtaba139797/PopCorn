interface MovieProp {
  title: string;
  year: string;
  poster: string;
}

const Movie = (prop: MovieProp) => {
  const { title, year, poster } = prop;
  return (
    <li className="flex flex-row gap-2">
      <img src={poster} alt={`${title}poster`} className="w-15 h-15" />
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
