import { ResultCount } from "./components/Navbar/ResultCount";
import { SearchInput } from "./components/Navbar/SearchInput";
import { SiteLogo } from "./components/Navbar/SiteLogo";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { useEffect, useState } from "react";

const KEY = "67c3761d";
export default function MoviesEx01() {
  const [query, setQuery] = useState([]);
  const [closeBox, setCloseBox] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);

  function handleCloseMovieList() {
    setCloseBox((closeBox) => !closeBox);
  }

  useEffect(() => {
    async function GhetBasicMovies() {
      try {
        const movieData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        const movieResult = await movieData.json();
        setMoviesData(movieResult);
      } catch {
      } finally {
      }
    }
    GhetBasicMovies();
  }, []);
  return (
    <>
      <Navbar>
        <SiteLogo />
        <SearchInput setQuery={setQuery} query={query} />
        <ResultCount />
      </Navbar>
      <Main>
        <Continers onCloseMovieList={handleCloseMovieList}>
          {closeBox || <Box></Box>}
        </Continers>
        <Continers></Continers>
      </Main>
    </>
  );
}

function Main({ children }) {
  return <div className="main-div-trash-movies">{children}</div>;
}

function Continers({ children, onCloseMovieList }) {
  return (
    <div className="Continers-div-trash-movies">
      <button onClick={onCloseMovieList}>x</button>
      {children}
    </div>
  );
}

function Box({ children }) {
  return <div className="Box-div-trash-movies">{children}</div>;
}

function ListOfMovies() {
  function displayMovieList() {}
  return (
    <div>
      <div>
        <img src="" />
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
