import { useState, useEffect } from "react";

export default function FindIndexEx06() {
  const [fetchApi, setFetchApi] = useState([]);
  const [addToFavorite, setAdToFavorite] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await data.json();
      setFetchApi(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-div-ex">
      <div className="pages-div">
        <p>List of person</p>
        {fetchApi.map(person => (
            <ul key={person.id}>
                <li >{person.name}</li>
                <button>Add</button>
            </ul>

        ))}
      </div>
      <div className="pages-div">
        <p>Favorite person</p>
      </div>
      {console.log(fetchApi)}
    </div>
  );
}
