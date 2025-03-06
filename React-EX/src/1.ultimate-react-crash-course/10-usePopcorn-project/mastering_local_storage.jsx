import { useEffect, useState } from "react";

export default function LocalStorageEx() {
    const [toDo, setToDo] = useState('')
const [addToDo, setAddToDo] = useState(() => {
    const storevalue = localStorage.getItem("key");
    return storevalue ? JSON.parse(storevalue) : [];
  
  });

  const handleAddToDo =() =>{
    setAddToDo([...addToDo, toDo])
    setToDo('')
  }

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(addToDo));
  }, [toDo]);

  return (
    <>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />
    <button onClick={handleAddToDo}>add</button>  
    {addToDo.map((toDos, index) => (
        <p key={index}>{toDos}</p>
    ))}
    </>
  );
}
