import { useState } from "react";

const TaskManager = () => {
    const [task, setTask]= useState('');
    const [writeTask, setWriteTask]=useState([]);

    const WriteTask = (event) => {
        setTask(event.target.value)
    }

    const SumbitTaskFun = () => {
        if (task !== ('')){
            setWriteTask([...writeTask, task])
        setTask('')
        }
    }

    const deleteTask = (deleteIndex) => {
        setWriteTask(writeTask.filter((_, index) => index !== deleteIndex));
    };
    
    return(<>
    <div>
        
    <input
        value={task}
        type="text"
        onChange={WriteTask}
        />
        <button onClick={SumbitTaskFun}>Submit</button>
    </div>
    {writeTask.map((createTask, index) => (
        <div key={index}>
            <h2>{createTask}</h2>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
    ))}
    </>)
}

export default TaskManager