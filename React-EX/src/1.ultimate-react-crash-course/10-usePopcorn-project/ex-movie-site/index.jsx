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
  const [query, setQuery] = useState('');
  const [closeBox, setCloseBox] = useState(false);
  const [moviesdata, setMoviesData] = useState([]);

  function handleCloseMovieList() {
    setCloseBox((closeBox) => !closeBox);
  }

  useEffect(() => {
    async function GetBasicMovies() {
      try {
        const movieData = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        const movieResult = await movieData.json();
        setMoviesData(movieResult.Search || [])
      } catch {
      } finally {
      }
    }
    GetBasicMovies();
    console.log(moviesdata)
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
          {closeBox || <Box>
            <ListOfMovies moviesdata={moviesdata}/>
            
            </Box>}
        </Continers>
        <Continers></Continers>
      </Main>
    </>
  );
}

function ListOfMovies({moviesdata}) {

  
  return (<>
  { moviesdata.map((movie) => (
    <div key={movie.imdbID} className="div-movie-basic-info">
        <div>
        <img src={movie.Poster} className="basic-info-img"/>
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
