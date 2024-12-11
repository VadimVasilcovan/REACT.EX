

const DisplayTask =({submitTask}) => {

    return (<div>
        {submitTask.map((newTask, index) => (
            <div key={index}>
                {newTask}
            </div>
        ))}
    </div>)
}

export default DisplayTask