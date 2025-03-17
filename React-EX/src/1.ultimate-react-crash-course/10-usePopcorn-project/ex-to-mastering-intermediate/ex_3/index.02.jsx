import { useState } from "react";

export default function AgentData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const[data, setData] = useState([])



  function handleAddAgentData(e){
    e.preventDefault();
    const newAgent = {
        name, 
        age,
        mail
    }
    if (name && age && mail){
        setData([...data, newAgent])
        setName('')
        setMail('')
        setAge('')
    }
  }
  return (
    <>
      <form value={data} onSubmit={handleAddAgentData}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input
          onChange={(e) => setAge(Number(e.target.value))}
          type="Number"
          value={age}
        />
        <input onChange={(e) => setMail(e.target.value)} value={mail} />
      <button>Add</button>
      </form>
    </>
  );
}
