import React from "react";
import { useState, useEffect } from "react";


const FetchDataex1 = () => {
const [records, setRecords]=useState([])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>setRecords(data))
    .catch (err => console.log(err))
}, [])

return (<div>
    <ul>{records.map((list, index) => (
        <li key={index}>{list.id} | {list.name} | {list.username}</li>
    ))}</ul>
        </div>
 )
}

export default FetchDataex1