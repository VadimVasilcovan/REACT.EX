import { useState } from "react";

const NewToDoList  = () => {
const [value, setValue] = useState('');
const [submitValue, setSubmitValue] = useState([]);


const WriteValue = (event) => {
    setValue(event.target.value)
}

const SubmitValueConst = () => {
    setSubmitValue([...submitValue, value]);
    setValue('')
}

const deleteAnSubmision = (deleteItem) => {
    setSubmitValue(submitValue.filter((_, index) => index !== deleteItem))
}



    return (<>
    
    <div>
    <input
    type="text"
    onChange={WriteValue}
    value={value}
    /> 
    <button onClick={SubmitValueConst}>Submit</button> 
    </div>

    <div>
        {submitValue.map((newValue, index) => (
            <div key={index}>
                <h1>{newValue}</h1>
                <button onClick={() => deleteAnSubmision(index)}>X</button>
            </div>
        ))}
    </div>
    </>)
}

export default NewToDoList
