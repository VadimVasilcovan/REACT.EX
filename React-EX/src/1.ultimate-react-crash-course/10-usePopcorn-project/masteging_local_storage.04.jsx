import { useEffect, useState } from "react";

export default function LocalStorageEx04() {
  const [data, setData] = useState("");
  const [task, setTask] = useState(() => {
    const storedData = localStorage.getItem("key");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleAddTask = () => {
    if (data.length > 0) {
      setTask([...task, data]);
      setData("");
    }
  };

  

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(task));
  }, [task]);
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
