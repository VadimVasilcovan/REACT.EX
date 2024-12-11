import { useState } from "react";
import CreateAnTask from "./ex.0.3_addingTask";
import DisplayTask from "./ex.0.3_displayTask";

const ToDoListUsingProps = () => {
    const [task, setTask]= useState('')
    const [submitTask, SetSubmitTask]= useState([])


    const addTaskProps = {task, setTask, submitTask, SetSubmitTask}
    return (<>
        <CreateAnTask {...addTaskProps}/>
        <DisplayTask submitTask={submitTask}/>
    </>)
}

export default ToDoListUsingProps