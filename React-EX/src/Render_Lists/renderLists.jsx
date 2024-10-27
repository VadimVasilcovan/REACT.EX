import React from "react";

const List = () => {
    
    const fruits =[
        {id:1, name:'apple', calories:95},
        {id: 2, name: 'banana', calories: 105},
        {id: 4, name: 'strawberry', calories: 4},   
        {id: 5, name: 'grapes', calories: 62},      
        {id: 6, name: 'mango', calories: 201},      
        {id: 3, name: 'orange', calories: 62}
    ];

    //SORT METHODS, ALPHABETICAL AND NUMERICAL//

    //fruits.sort((a, b) => a.name.localeCompare(b.name));// ALPHABETICAL
     //fruits.sort((a, b) => b.name.localeCompare(a.name));// REVERSE ALPHABETICAL
     //fruits.sort((a, b) => a.calories - b.calories) // NUMERIC ORDER
     //fruits.sort((a, b) => b.calories - a.calories)// REVERSE NUMERIC ORDER

    //FILTER METHODS//

    const FilterMethod = fruits.filter(fruit => fruit.calories >200);

    const ListOfFruits = FilterMethod.map(FilterMethod => (
        <li key={FilterMethod.id}>
            {FilterMethod.name} : &nbsp; {FilterMethod.calories}
        </li>
    ))
    return (
        <ol>
            {ListOfFruits}
        </ol>
        
    )
}

export default List