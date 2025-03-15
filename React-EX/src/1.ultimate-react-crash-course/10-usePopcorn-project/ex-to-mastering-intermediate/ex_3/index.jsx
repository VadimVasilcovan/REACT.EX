import { useEffect, useState } from "react";

export default function MasteringIntermediateEx3(){
const [data, setData,] = useState('')
const [task, setTask] = useState([])


function handleAddTask(){
    setTask([...task, data])
    setData('')
}

return(<div>
    <input onChange={(e)=>setData(e.target.value)}
    value={data}
    />
    <button onClick={handleAddTask}>Add A task</button>
    {task.map((tasks, index) => (
        <p key={index}>{tasks}</p>
    ))}
</div>)
}