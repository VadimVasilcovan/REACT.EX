import React, { useState, useEffect } from "react";

const PokeApi = () => {
  const [pokeName, setPokeName] = useState([]); 

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=11') // Fetch a list of 10 Pokémon
      .then(response => response.json())
      .then(data => setPokeName(data.results)) // Set the array of results (the array of Pokémon)
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {pokeName.map((pokemon, index) => (
          <div key={index}>
            <p>{pokemon.name}</p> 
            
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PokeApi;
