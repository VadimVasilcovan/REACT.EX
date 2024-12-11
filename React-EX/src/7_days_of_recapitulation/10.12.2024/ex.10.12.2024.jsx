import { useState } from "react"; 

const InputExercise = () => {
const [value, setvalue] = useState('')
const [submitValue, setSubmitValue] = useState([])

const writeanvaluea = (event) => {
    setvalue(event.target.value)
}

const submitValueconst = () => {
    setSubmitValue([...submitValue, value]);
    setvalue('');
}



return(<>
<input
type="text"
onChange={writeanvaluea}
value={value}
>
</input>
<button onClick={submitValueconst}>
    submit
</button>
<div>
    {submitValue.map((item, index) => (
  <div key={index}>
    <span >{item}</span>
    <button>X</button>
  </div>
))}

</div>
</>)

}

export default InputExercise