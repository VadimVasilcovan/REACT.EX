import { useState, useEffect } from "react";
import { useHandleEnter } from "./handleEnter";

export default function AgentData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  
  
  useHandleEnter(handleAddAgentData, age);
  
  const [data, setData] = useState(() => {
    const agentInfo = localStorage.getItem("agentInfo");
    return agentInfo ? JSON.parse(agentInfo) : [];
  });

  const [succesMessage, setSuccesMesage] = useState(false);

  
  function handleAddAgentData() {
    const newAgent = {
      name,
      age,
      mail,
    };
    if (name && age && mail) {
      setData([...data, newAgent]);
      setName("");
      setMail("");
      setAge("");
      setSuccesMesage(true);
    } else {
      setSuccesMesage(false);
    }
  }

  
  useEffect(() => {
    localStorage.setItem("agentInfo", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="Number"
          value={age}
          placeholder="Age"
        />
        <input onChange={(e) => setMail(e.target.value)} value={mail} placeholder="Email" />
        {succesMessage && <h2>Good, good!</h2>}
        <button type="submit">Add</button>
      </form>

      {data.map((agent, index) => (
        <p key={index}>
          {agent.name} - {agent.age} - {agent.mail}
        </p>
      ))}
    </>
  );
}
