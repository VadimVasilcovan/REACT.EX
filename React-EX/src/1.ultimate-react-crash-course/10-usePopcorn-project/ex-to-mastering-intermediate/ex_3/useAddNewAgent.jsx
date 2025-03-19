import { useState } from "react";

export function useAddNewAgent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [succesMessage, setSuccesMesage] = useState(false);
  const [data, setData] = useState(() => {
    const agentInfo = localStorage.getItem("agentInfo");
    return agentInfo ? JSON.parse(agentInfo) : [];
  });

  function handleAddAgentData() {
    const newAgent = {
      name,
      age,
      mail,
    };
    if (name && age && mail) {
      setData((prevData) => [...prevData, newAgent]); // Add to existing data
      setName("");
      setMail("");
      setAge("");
      setSuccesMesage(true);
    } else {
      setSuccesMesage(false);
    }
  }

  return {
    name,
    age,
    mail,
    data,
    succesMessage,
    setName,
    setAge,
    setMail,
    handleAddAgentData,
    setData,
  };
}
