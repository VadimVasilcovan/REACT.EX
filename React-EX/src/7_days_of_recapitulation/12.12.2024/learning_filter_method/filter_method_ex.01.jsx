import React from "react";

const FilterMethodEX01 = () => {
     const numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
     const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
     ];
     const filteringNumbers = numbers.filter(num => num !== 2 )
     const filteringPerson = users.filter(user => user.id !== 3)
     return (
        <>
          <h1>Filtered Numbers:</h1>
          <ul>
            {filteringNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
    
          <h1>Filtered Users:</h1>
          <ul>
            {filteringPerson.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      );
    };
    
    export default FilterMethodEX01;