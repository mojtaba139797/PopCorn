const MovieDetails = () => {
  return (
    <div>
      <div id="header" className="flex flex-row gap-4">
        <img src="" alt="" />
        <h2>title</h2>
        <p>date</p>
        <span>.</span>
        <p>time</p>
        <p>gener</p>
        <p>imdb rating</p>
      </div>
      <div id="addToList"></div>
      <div is="description"></div>
    </div>
  );
};

export default MovieDetails;
