const DeleteTask = ({ SetSubmitTask, index, submitTask }) => {
    const deletetask = () => {
        const updatedTasks = submitTask.filter((_, i) => i !== index);
        SetSubmitTask(updatedTasks); // Update the state
    };

    return (
        <>
            <button onClick={deletetask}>Delete</button>
        </>
    );
};

export default DeleteTask;
