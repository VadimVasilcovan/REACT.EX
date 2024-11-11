import React, { useState, useEffect } from "react";
import NameFilter from "./name-filter";

const TheListOfPersonParent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [nameFilter, setNameFilter] = useState("");

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

  const UserFilter = data.filter(
    (user) => !nameFilter || user.name.includes(nameFilter)
  );

  return (
    <div>
      <NameFilter data={data} setNameFilter={setNameFilter} />
      {error && <p>{error}</p>}
      <ul>
        {UserFilter.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TheListOfPersonParent;
