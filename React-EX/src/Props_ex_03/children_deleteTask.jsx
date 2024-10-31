import './parent-component'

const DeleteTask = ( { submitTask, setSubmitTask, index  }) => {
    
    const deleteTaskFun = (deleteTaskIndex) => {
        setSubmitTask(submitTask.filter((_, i) => i !== deleteTaskIndex))
    }
    return(<>
    <button  onClick={() => deleteTaskFun(index)}>X</button>
    </>)
}

export default DeleteTask