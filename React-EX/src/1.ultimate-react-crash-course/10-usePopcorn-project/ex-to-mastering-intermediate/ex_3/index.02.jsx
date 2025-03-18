import { useAddNewAgent } from "./useAddNewAgent";
import { useHandleEnter } from "./handleEnter";

export default function AgentData() {
 
  const {
    name,
    age,
    mail,
    data,
    succesMessage,
    setName,
    setAge,
    setMail,
    handleAddAgentData
  } = useAddNewAgent();

  
  useHandleEnter(handleAddAgentData, name);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="Number"
          value={age}
          placeholder="Age"
        />
        <input
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          placeholder="Email"
        />
        {succesMessage && <h2>Good, good!</h2>}
        <button onClick={handleAddAgentData}>Add</button>
      </form>

      {data.map((agent, index) => (
        <p key={index}>
          {agent.name} - {agent.age} - {agent.mail}
        </p>
      ))}
    </>
  );
}
