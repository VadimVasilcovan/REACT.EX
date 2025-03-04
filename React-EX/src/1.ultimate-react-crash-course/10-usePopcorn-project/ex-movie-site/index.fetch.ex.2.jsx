 import { useEffect, useState } from "react";

export default function FetchEx04() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller =new AbortController
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");
        const movieData = await fetch(
          `http://www.omdbapi.com/?apikey=67c3761d&s=${query}`,
          {signal: controller.signal}
        );
        if (!movieData.ok) throw new Error("fetch problem");
        const movieResult = await movieData.json();
        if (movieResult.Response === "False")
          throw new Error("Movie not found");

        setData(movieResult?.Search || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
    return function(){
        
        controller.abort();
    }
  }, [query]);

  return (
    <>
      {loading && <Loading />}
      {!loading && !error && <MovieList data={data} />}
      {error && <ErrorMessage error={error} />}

      <SearchMovies query={query} setQuery={setQuery} />
    </>
  );
}

function MovieList({ data }) {
  return (
    <>
      {data.map((movie) => (
        <h1 key={movie.imdbID}>{movie.Title}</h1>
      ))}
    </>
  );
}
function ErrorMessage({ error }) {
  return (
    <>
      <h1>{error}</h1>
    </>
  );
}

function SearchMovies({ query, setQuery }) {
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
}

function Loading() {
  return (
    <>
      <h1>🔃Loading ...</h1>
    </>
  );
}
