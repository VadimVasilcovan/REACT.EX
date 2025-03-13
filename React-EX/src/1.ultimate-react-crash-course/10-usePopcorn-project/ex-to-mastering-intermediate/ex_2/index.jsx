import { useState } from "react";


export default function Exercise002(){
    const [data, setData] = useState('')
    const [toDo, setToDo] = useState([])

    
    const handleAddToDo = () =>{
        if(data.length > 3){
            setToDo([...toDo, data])
        }
    }


    return(<>
    <input
    onChange={(e) => (setData(e.target.value))}
    value={data}
    />
    <button onClick={handleAddToDo}>Add</button>
    {toDo.map((toDos, index) =>(
        <p key={index}>{toDos}</p>
    ) )}
    </>)

}