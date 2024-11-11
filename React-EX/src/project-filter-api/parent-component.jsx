import React, { useState, useEffect } from "react";
import NameFilter from "./name-filter";
import FilterUserName from "./username-filter";

const TheListOfPersonParent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [nameFilter, setNameFilter] = useState("");
  const [username, setUserName] = useState('')
  const [selectUserName, setSelectUserName]= useState ([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const UserFilter = data.filter((user) =>{
    return (
        (!nameFilter || user.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
        (!username || user.username.toLowerCase().includes(username.toLowerCase()))
  )}
  );
    
  return (
    <div>
      <NameFilter 
      data={data} 
      setNameFilter={setNameFilter} />

      <FilterUserName 
    username={username} 
    setUserName={setUserName} 
    selectUserName={selectUserName} 
    setSelectUserName={setSelectUserName} 
/>
      {error && <p>{error}</p>}
      <ul>
        {UserFilter.map((user) => (
          <li key={user.id}> Name:{user.name} UserName:{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default TheListOfPersonParent;
