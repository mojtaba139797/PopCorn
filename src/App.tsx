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
import watched from "./constants/watched";
import WatchedSummary from "./components/WatchedSummary";
import type { MovieType } from "./type/MovieType";

function App() {
  const [query, setQuery] = useState<string>("");
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
  const [isLoading2, setIsLoading2] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [moviesFetched, setMoviesFetched] = useState<MovieType[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [Poster, setPoster] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Released, setReleased] = useState<string>("");
  const [Runtime, setRuntime] = useState<string>("");
  const [Genre, setGenre] = useState<string>("");
  const [imdbRating, setimdbRating] = useState<string>("");
  const [Plot, setPlot] = useState<string>("");
  const [Actors, setActors] = useState<string>("");
  const [Director, setDirector] = useState<string>("");

  const handleClickMovie = (imdbId: string, showDetails: boolean) => {
    setSelectedId(imdbId);
    setShowDetails(!showDetails);
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
        setPoster(details.Poster);
        setTitle(details.Title);
        setReleased(details.Released);
        setRuntime(details.Runtime);
        setGenre(details.Genre);
        setimdbRating(details.imdbRating);
        setActors(details.Actors);
        setPlot(details.Plot);
        setDirector(details.Director);
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
                showDetails={showDetails}
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
                  Poster={Poster}
                  Title={Title}
                  handleClickBackButton={handleClickBackButton}
                  showDetails={showDetails}
                  Released={Released}
                  Runtime={Runtime}
                  Genre={Genre}
                  imdbRating={imdbRating}
                  Plot={Plot}
                  Director={Director}
                  Actors={Actors}
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
