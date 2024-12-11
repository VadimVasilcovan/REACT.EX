import './ex_0.3_parent_coponent'

const CreateAnTask = ({task, setTask, submitTask, SetSubmitTask}) => {


    const WriteTask = (event) => {
        setTask(event.target.value)
    }
    
    const SubmitTaskConst = () => {
        if (task !== ('')){
            SetSubmitTask([...submitTask, task])
            setTask('')
        }
    }
    
    
    return(<div>
        <input 
        type='text'
        onChange={WriteTask}
        value={task}
        >
        </input>
        <button onClick={SubmitTaskConst}>
            Submit
        </button>
    </div>)
}

export default CreateAnTask