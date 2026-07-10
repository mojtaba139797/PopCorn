import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import LayOut from "./components/LayOut";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import movies from "./constants/movies";

function App() {
  return (
    <>
      <LayOut>
        <Navbar>
          <Search />
          <NumResults />
        </Navbar>
        <Main>
          <Box>
            <MovieList movies={movies} />
          </Box>
          <Box></Box>
        </Main>
      </LayOut>
    </>
  );
}

export default App;
