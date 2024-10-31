import { useState } from "react"
import './parent-component'

const AddTask = ({task, setTask, submitTask, setSubmitTask}) => {


    const writeTask = (event) =>{
        setTask(event.target.value)
    }

    const submitTaskFun = () => {
        setSubmitTask([...submitTask, task]);
        setTask('');
    }

    return (<>
    <input
    value={task}
    type="text"
    onChange={writeTask}
    />
     <button onClick={submitTaskFun}>Submit</button>
    </>)

}

export default AddTask;