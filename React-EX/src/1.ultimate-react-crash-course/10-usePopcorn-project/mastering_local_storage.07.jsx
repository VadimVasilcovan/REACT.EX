import { useEffect, useState } from "react";

export default function LocalStorageEx07() {
  const [data, setData] = useState("");
  const [task, setTask] = useState(() => {
    const addToDoToLocalStorage = localStorage.getItem('dsfadfas');
    return addToDoToLocalStorage ? JSON.parse(addToDoToLocalStorage) : [];
  });

  const handleAddTask = () => {
    if (data.length > 0) {
      setTask([...task, data]);
      setData("");
    }
  };

useEffect (()=>{
    const handleKey = (e)=> {
        if (e.key === 'Enter'){
            handleAddTask();
        }
        
    }

    document.addEventListener('keydown', handleKey)

    return() => {
        document.removeEventListener('keydown', handleKey)
    }
},[data])
  
  useEffect(() => {
    localStorage.setItem('dsfadfas', JSON.stringify(task))
  },[task])


  return (
    <>
      <input value={data} onChange={(e) => setData(e.target.value)} />

      <button onClick={handleAddTask}>Add</button>
      {task.map((toDos, index) => (
        <p key={index}>{toDos}</p>
      ))}
    </>
  );
}
