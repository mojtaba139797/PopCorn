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
import Loader1 from "./components/Loader1";
import Loader2 from "./components/Loader2";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
import type { MovieType } from "./type/MovieType";
import type { WatchedType } from "./type/WatchedType";
import type { MovieDetailsType } from "./type/MovieDetailsType";

function App() {
  const [query, setQuery] = useState<string>("");
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [moviesFetched, setMoviesFetched] = useState<MovieType[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsType | null>(
    null,
  );
  const [rate, setRate] = useState<number>();
  const [watched, setWatched] = useState<WatchedType[]>([]);

  const handleClickMovie = (imdbId: string) => {
    setSelectedId(imdbId);
    setShowDetails(true);
  };

  const handleClickBackButton = () => {
    setShowDetails(!showDetails);
  };

  const API = `http://www.omdbapi.com/?s=${query}&apikey=6a8851aa`;

  const DetailsApi = `http://www.omdbapi.com/?i=${selectedId}&apikey=6a8851aa`;

  useEffect(() => {
    if (selectedId === undefined) return;

    const controller = new AbortController();

    const fetchDetails = async () => {
      try {
        setIsLoading2(true);
        const res = await fetch(DetailsApi, { signal: controller.signal });

        if (!res.ok)
          throw new Error("Something went wrong with fetching details");

        const details = await res.json();

        console.log(details);
        details.Runtime = Number(details.Runtime.split(" ")[0]);
        details.imdbRating = Number(details.imdbRating);
        setSelectedMovie(details);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Failed to fetch details");
      } finally {
        setIsLoading2(false);
      }
    };
    fetchDetails();

    return () => {
      controller.abort();
      setRate(0);
    };
  }, [selectedId]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading1(true);
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
        setIsLoading1(false);
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

  console.log(selectedMovie);
  return (
    <>
      <LayOut>
        <Navbar>
          <Search query={query} setQuery={setQuery} />
          <NumResults movies={moviesFetched} />
        </Navbar>
        <Main>
          <Box>
            {isLoading1 ? (
              <Loader1 />
            ) : (
              <MovieList
                movies={moviesFetched}
                handleClickMovie={handleClickMovie}
              />
            )}
          </Box>
          <Box>
            {showDetails ? (
              isLoading2 ? (
                <Loader2 />
              ) : (
                <MovieDetails
                  handleClickBackButton={handleClickBackButton}
                  movieDetails={selectedMovie}
                  selectedId={selectedId}
                  setWatched={setWatched}
                  watched={watched}
                  rate={rate}
                  setRate={setRate}
                />
              )
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} />
              </>
            )}
          </Box>
        </Main>
      </LayOut>
    </>
  );
}

export default App;
