import { useEffect, useState } from "react";

export default function FilterMethod05() {
  const [apiData, setApiData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await data.json(); 
      setApiData(result);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const AdToFavorites = (CheckData) =>{
    const checkIfExist = favorite.findIndex((i)  => i.id === CheckData.id )

    if(checkIfExist === -1){
        setFavorite([...favorite, CheckData]);

    }

  }

  const DeleteItem = (deleteID) => {
    setFavorite(D => D.filter(i => i !== deleteID))
  }

  return (
    <div className="main-div-ex">
      <div className="pages-div">
        {apiData.map((person) => (
         <ul  key={person.id}>
         <li>{person.name}</li>
         <button onClick={() => AdToFavorites(person)}>Add</button>
       </ul>
       
        ))}
      </div>
      <div className="pages-div">
      {favorite.map((person) => (
          
          <ul  key={person.id}> <li>{person.name}</li>
          <button onClick={() => DeleteItem(person)}>Delete</button>
          </ul>
        ))}
      </div>
  
    </div>
  );
}
