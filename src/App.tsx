import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import LayOut from "./components/LayOut";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMoviesList from "./components/WatchedMoviesList";
import movies from "./constants/movies";
import watched from "./constants/watched";
import WatchedSummary from "./components/WatchedSummary";

function App() {
  return (
    <>
      <LayOut>
        <Navbar>
          <Search />
          <NumResults movies={movies} />
        </Navbar>
        <Main>
          <Box>
            <MovieList movies={movies} />
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
