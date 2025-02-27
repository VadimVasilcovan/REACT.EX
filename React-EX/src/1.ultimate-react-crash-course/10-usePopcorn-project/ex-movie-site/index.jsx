import { ResultCount } from "./components/Navbar/ResultCount";
import { SearchInput } from "./components/Navbar/SearchInput";
import { SiteLogo } from "./components/Navbar/SiteLogo";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { useEffect, useState } from "react";
import { Continers } from "./components/Continers";
import { Box } from "./components/Box";
import { Main } from "./components/Main";

const KEY = "67c3761d";
export default function MoviesEx01() {
  const [query, setQuery] = useState("");
  const [closeBox, setCloseBox] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  function handleCloseMovieList() {
    setCloseBox((closeBox) => !closeBox);
  }

  function handleId(movie) {
    setSelectedId(movie);
  }

  useEffect(() => {
    async function GetBasicMovies() {
      try {
        const movieData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        const movieResult = await movieData.json();
        setMoviesData(movieResult.Search || []);
      } catch {
      } finally {
      }
    }
    GetBasicMovies();
    console.log(moviesdata);
  }, [query]);

  return (
    <>
      <Navbar>
        <SiteLogo />
        <SearchInput setQuery={setQuery} query={query} />
        <ResultCount />
      </Navbar>
      <Main>
        <Continers onCloseMovieList={handleCloseMovieList}>
          {closeBox || (
            <Box>
              <ListOfMovies moviesdata={moviesdata} handleId={handleId} />
            </Box>
          )}
        </Continers>
        <Continers>
          <MovieInfo selectedId={selectedId} />
        </Continers>
      </Main>
    </>
  );
}

function ListOfMovies({ moviesdata, handleId }) {
  return (
    <>
      {moviesdata.map((movie) => (
        <div
          key={movie.imdbID}
          className="div-movie-basic-info"
          onClick={() => handleId(movie.imdbID)}
        >
          <div>
            <img src={movie.Poster} className="basic-info-img" />
          </div>
          <div className="basic-info-secondary">
            <span>{movie.Title}</span>
            <span>{movie.Year}</span>
          </div>
        </div>
      ))}
    </>
  );
}

function MovieInfo({selectedId}) {
  const [detaliedInfo, setDetaliedInfo] = useState({});

  useEffect(() => {
    async function handleDetaliedInfo() {
      try {
        const detaliedData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const detaliedReult = await detaliedData.json();
        setDetaliedInfo(detaliedReult || {});
      } catch {}
    }

    handleDetaliedInfo();
    console.log(detaliedInfo)
  }, [selectedId]);

  return <div>
    <img src={detaliedInfo.Poster}/>
    <h1>Title: {detaliedInfo.Title}</h1>
    <h1>Country: {detaliedInfo.Country}</h1>
    <h1>Rating: {detaliedInfo.imdbRating} ⭐</h1>
  </div>;
}
