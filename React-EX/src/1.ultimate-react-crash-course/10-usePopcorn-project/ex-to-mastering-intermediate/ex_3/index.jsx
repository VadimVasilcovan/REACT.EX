import { useEffect, useReducer, useRef, useState } from "react";

export default function MasteringIntermediateEx3() {
  const [data, setData] = useState("");
  const [task, setTask] = useState(() => {
    const extractLocalStorageInfo = localStorage.getItem("addSomething");
    return extractLocalStorageInfo ? JSON.parse(extractLocalStorageInfo) : [];
  });
  const HandleOnFocus = useRef(null);
  function handleAddTask() {
    setTask([...task, data]);
    setData("");
  }

  useEffect(() => {
    HandleOnFocus.current.focus();
  }, []);

  useEffect(() => {
    function handleEnterClick(e) {
      if (e.key === "Enter") {
        handleAddTask();
      }
    }
    document.addEventListener("keydown", handleEnterClick);

    return () => {
      document.removeEventListener("keydown", handleEnterClick);
    };
  }, [data]);

  useEffect(() => {
    localStorage.setItem("addSomething", JSON.stringify(task));
  }, [task]);
  return (
    <div>
      <input
        onChange={(e) => setData(e.target.value)}
        value={data}
        ref={HandleOnFocus}
      />
      <button onClick={handleAddTask}>Add A task</button>
      {task.map((tasks, index) => (
        <p key={index}>{tasks}</p>
      ))}
    </div>
  );
}
