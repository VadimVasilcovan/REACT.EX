import { useState } from "react"
import './children_addTask.jsx'
import AddTask from './children_addTask.jsx';
import DeleteTask from "./children_deleteTask.jsx";

const ToDoList = () => {
    const [task, setTask]=useState('');
    const [submitTask, setSubmitTask]=useState([]);

    const addTaskProps = { task, setTask, submitTask, setSubmitTask };

    return(<>
   <AddTask {...addTaskProps} />
   
   {submitTask.map((task, index) => (
    <div key={index}>{task}
    <DeleteTask {...addTaskProps} index={index} />
    </div> 
))}
    
    </>)
}
export default ToDoList;