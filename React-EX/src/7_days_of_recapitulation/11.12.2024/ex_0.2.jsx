import { useState } from "react";

const CreatingList = () => {
    const [task, setTask] = useState('')
    const [submitTask, setSubmitTask] = useState([])


    const addTask = (event) => {
            setTask(event.target.value)
    }

    const submitTaskFun = () => {
        if (task !== ('')) {
            setSubmitTask([...submitTask, task])
        setTask('')
        }
    }

    const deleteTask = (deleteItem) => {
        setSubmitTask(submitTask.filter((_, index) => index !== deleteItem))
    }

    return <div>
        <div>
        <input
        type="text"
        value={task}
        onChange={addTask}
        />
        <button onClick={submitTaskFun}>Submit</button>
        </div>
        <div>
        {submitTask.map((newTask, index) => (
            <div key={index}>
            <h1>{newTask}</h1>
            <button onClick={() =>  deleteTask(index)}>Delette</button>
            </div>
        ))}
        </div>
    </div>
}

export default CreatingList