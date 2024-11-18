import React from "react";
import { useState, useEffect } from "react";
import '../project-filter-api-02.jsx/pokemonFetch.css'
import PokemonNameFilter from "./pokemonNameFilter";

const ParentApiEx2 = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [nameFilter, setNameFilter] = useState("")
    const [submitNameFilter, setSubmitNameFilter] = useState([])

    useEffect  (() =>{
        const fetchData = async () => {
            try{
                const response = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=11')
                const jsonData  = await response.json();
                setData(jsonData.results);
            }catch(error){
                setError(error.message)
            }
            console.log([data])
        };
        fetchData();
    }, [])

   const Filterpokemon = data.filter ((pokemon) => {
        return (
            (!nameFilter || pokemon.name.toLowerCase().includes(nameFilter.toLocaleLowerCase))
        )}
        ); 
            

    return (<div>
        <div className="filters-div">
                <PokemonNameFilter 
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                submitNameFilter={submitNameFilter}
                setSubmitNameFilter={setSubmitNameFilter}
                />
             </div>
    <div className="Pokemon-Data-div-main">
        {Filterpokemon.map((pokemon, index) => (
            <span className="Pokemon-Data-div" key={index} >
            <span>
            <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}/>
            </span>
           <span>
             <p>{pokemon.name}</p>
           </span>
            </span>
        ))}
    </div>
    </div>)
}

export default ParentApiEx2