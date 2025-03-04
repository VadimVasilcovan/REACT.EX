import { useState } from "react"


export default function FetchEx04(){
const [query, setQuery] = useState('inter')
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')


useState(()=>{
    async function fetchMovies(){
        try{
            const movieData = await fetch(`http://www.omdbapi.com/?apikey=67c3761d&s=${query}`)
            const movieResult = await movieData.json();
            setData(movieResult?.Search || [])
        }catch{

        }finally{

        }
    }
    fetchMovies()
},[])
    return(<>
    <MovieList data={data}  />
    </>)
}

function MovieList({data}){
return(<>
{data.map((movie) => (
    <h1 key={movie.imdbID}>{movie.Title}</h1>
))}
</>)

} 