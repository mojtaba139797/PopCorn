import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import LayOut from "./components/LayOut";

function App() {
  return (
    <>
      <LayOut>
        <Navbar>
          <Search />
          <NumResults />
        </Navbar>
        <Main />
      </LayOut>
    </>
  );
}

export default App;
