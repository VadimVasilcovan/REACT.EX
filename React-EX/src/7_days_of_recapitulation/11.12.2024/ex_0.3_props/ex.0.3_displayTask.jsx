import DeleteTask from "./ex.0.3_delettingTask";

const DisplayTask = ({ submitTask, SetSubmitTask }) => {
    return (
        <div>
            {submitTask.map((newTask, index) => (
                <div key={index}>
                    {newTask}
                    
                    <DeleteTask SetSubmitTask={SetSubmitTask} index={index} submitTask={submitTask} />
                </div>
            ))}
        </div>
    );
};

export default DisplayTask;
