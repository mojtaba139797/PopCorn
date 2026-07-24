import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import LayOut from "./components/LayOut";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import movies from "./constants/movies";
import watched from "./constants/watched";
import WatchedSummary from "./components/WatchedSummary";
import type { MovieType } from "./type/MovieType";

function App() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [moviesFetched, setMoviesFetched] = useState<MovieType[]>([]);

  const API = `http://www.omdbapi.com/?s=${query}&apikey=6a8851aa`;

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(API, { signal: controller.signal });

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMoviesFetched(data.Search);
        console.log(data.Search);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMoviesFetched([]);
      return;
    }
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <>
      <LayOut>
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <NumResults movies={moviesFetched} />
        </Navbar>
        <Main>
          <Box>
            {isLoading ? <Loader /> : <MovieList movies={moviesFetched} />}
          </Box>
          <Box>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList watched={watched} />
          </Box>
        </Main>
      </LayOut>
    </>
  );
}

export default App;
