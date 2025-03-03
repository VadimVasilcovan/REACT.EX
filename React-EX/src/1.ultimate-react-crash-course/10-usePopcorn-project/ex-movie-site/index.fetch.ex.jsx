import { useEffect, useState } from "react";

const KEY = "67c3761d";

export default function OneMoreFetchEx() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  
  useEffect(() => {
    const controller = new AbortController();
    async function getData() {
      try {
        setLoading(true);
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!data.ok)
          throw new Error("Something went wrong with fetching movies");
        const result = await data.json();
        if (result.Response === "False") throw new Error("nothing was found");
        setData(result.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      if (query.length < 3) {
        setData([]);
        setError("");
      }
    }
    getData();
    return function () {
      controller.abort();
    };
  }, [query]);



  
  return (
    <div>
      <InputSearch query={query} setQuery={setQuery} />
      {loading ? <Loading /> : <DisplayData data={data} />}
      <ErrorMessages error={error} />
    </div>
  );
}

function ErrorMessages({ error }) {
  return (
    <div>
      <h2>❌{error}</h2>
    </div>
  );
}

function InputSearch({ query, setQuery }) {
  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}

function DisplayData({ data }) {
  return (
    <>
      {data?.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} />
        </div>
      ))}
    </>
  );
}

function Loading() {
  return <h1>Loading...</h1>;
}
