import { useEffect, useState } from "react";


export default function LocalStorageEx05 (){
    const [data, setData] = useState('')
    const [task, setTask] = useState(() => {
        const setToLocalStorage = localStorage.getItem('LocalStorageToDo')
        return setToLocalStorage ? JSON.parse(setToLocalStorage) : []; 
    })

    const handleAddTask = () => {
        if(data.length > 0){
            setTask([...task, data])
        setData('')
        }
    }

    useEffect(()=>{
        localStorage.setItem('LocalStorageToDo', JSON.stringify(task))
    },[task])

  
    return(<>
    <input
    value={data}
    onChange = {(e) => setData(e.target.value)}
    />

    <button onClick={handleAddTask}>Add</button>
        {task.map((toDos, index) => (
            <p key={index}>{toDos}</p>
        ))}
    </>)

}