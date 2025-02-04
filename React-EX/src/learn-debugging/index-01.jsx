import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...task];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks)
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map((t, index) => (
          <li key={index} onClick={() => toggleTask(index)}>
            {t.completed ? <s>{t.text}</s> : t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
