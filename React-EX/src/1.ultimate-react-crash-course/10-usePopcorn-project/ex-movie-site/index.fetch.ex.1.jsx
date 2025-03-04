import { useEffect, useState } from "react";


export default function FetchEx03 (){
    const [query, setQuery] = useState('inter')
    const [data, setData] = useState([])
    const [loading, setLoading] =useState(false)
    const [error, setError] = useState('')


    useEffect(()=>{
        async function fetchMovieList(){
            try{
                setLoading(true)
                const data = await fetch(`http://www.omdbapi.com/?apikey=67c3761d&s=${query}`);
                if(!data.ok) throw new Error('data can not bee fetched')
                const result = await data.json();
                if (result.Response === 'False') throw new Error('movie was not find')
                setData(result?.Search || [])

            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
                
            }
             
        }
        fetchMovieList()
      
        
    },[query])

    return(<>
  

        {loading && <Loading/> }
        {!loading && !error && <ListOfMovies data={data}/>}
        {error && <ErrorContainer error={error}/>}


       
        
    </>)
}


function ListOfMovies({data}){

    return(<>
    {data.map((movie) => (
        <h2>{movie.Title}</h2>
    ))}
    </>)
}

function Loading (){
    return (<>
    <h1>Loading...</h1>
    </>)
}

function ErrorContainer({error}){
    return(<div>
        <h2>{error}</h2>
    </div>)
}