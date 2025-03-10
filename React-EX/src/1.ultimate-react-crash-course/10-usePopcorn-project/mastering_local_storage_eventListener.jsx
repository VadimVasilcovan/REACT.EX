import { useEffect, useRef, useState } from "react";

export default function LocalStorageEx08() {
  const [data, setData] = useState("");
  const [task, setTask] = useState(() => {
    const addToLocalStorage = localStorage.getItem("dsafas");
    return addToLocalStorage ? JSON.parse(addToLocalStorage) : [];
  });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = () => {
    if (data.length > 0) {
      setTask([...task, data]);
      setData("");
    }
  };

  useEffect(() => {
    localStorage.setItem("dsafas", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    const handleAction = (e) => {
      if (e.key === "Enter") {
        handleAddTask();
      }
    };
    document.addEventListener("keydown", handleAction);
    return () => {
      document.removeEventListener("keydown", handleAction);
    };
  }, [data]);

  return (
    <>
      <input
        ref={inputRef}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleAddTask}>Add</button>
      {task.map((toDos, index) => (
        <p key={index}>{toDos}</p>
      ))}
    </>
  );
}
