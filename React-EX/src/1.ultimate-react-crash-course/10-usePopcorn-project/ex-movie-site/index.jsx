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
  const [showFavorite, setShowFavorite] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [listOfFavorites, setListOfFavorites] = useState([]);
  const [error, setError] = useState([]);
  function handleCloseMovieList() {
    setCloseBox((closeBox) => !closeBox);
  }

  function handleId(movie) {
    setSelectedId(movie);
    setShowFavorite(true);
  }

  function handleAddToFavorites(newFavoriteItem) {
    setListOfFavorites((prev) =>
      prev.some((p) => p.imdbID === newFavoriteItem.imdbID)
        ? prev
        : [...prev, newFavoriteItem]
    );
    setShowFavorite(false);
  }

  useEffect(() => {
    async function GetBasicMovies() {
      try {
        setIsloading(true);
        const movieData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!movieData.ok) throw new Error("something went wrong");
        const movieResult = await movieData.json();

        if (movieResult.Response === "False")
          throw new Error("movies was not found");
        setMoviesData(movieResult.Search || []);
      } catch (err) {
        console.error(err.message);
        setError(err.message)
      } finally {
        setIsloading(false);
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
        <ResultCount moviesdata={moviesdata} />
      </Navbar>
      <Main>
        <Continers onCloseMovieList={handleCloseMovieList}>
          {closeBox || (
            <Box>
              {isloading ? (
                <h1>Loading</h1>
              ) : (
                <ListOfMovies moviesdata={moviesdata} handleId={handleId} />
              )}
            </Box>
          )}
        </Continers>
        <Continers>
          <Box>
            {showFavorite ? (
              <MovieInfo
                selectedId={selectedId}
                onAddToFavorites={handleAddToFavorites}
              />
            ) : (
              <ListOfFavoritesMovies listOfFavorites={listOfFavorites} />
            )}

            <ErrorMessage message={error}/>
          </Box>
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
            <span>
              <h2>Title</h2>
              {movie.Title}
            </span>
            <span>
              <h2>Year</h2>
              {movie.Year}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

function ListOfFavoritesMovies({ listOfFavorites }) {
  return (
    <>
      {listOfFavorites.map((movie) => (
        <div key={movie.imdbID} className="div-movie-basic-info-fav">
          <div>
            <img src={movie.Poster} className="basic-info-img" />
          </div>
          <div className="basic-info-secondary">
            <span>
              <h2>Title</h2>
              {movie.Title}
            </span>
            <span>
              <h2>Year</h2>
              {movie.Year}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

function MovieInfo({ selectedId, onAddToFavorites }) {
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
    console.log(detaliedInfo);
  }, [selectedId]);

  return (
    <div>
      <img src={detaliedInfo.Poster} />

      <button onClick={() => onAddToFavorites(detaliedInfo)}>
        Add To Favorite
      </button>

      <h1>Title: {detaliedInfo.Title}</h1>
      <h1>Country: {detaliedInfo.Country}</h1>
      <h1>Rating: {detaliedInfo.imdbRating} ⭐</h1>
    </div>
  );
}



function ErrorMessage({message}){


  return(<span>🤬{message}</span>)
}