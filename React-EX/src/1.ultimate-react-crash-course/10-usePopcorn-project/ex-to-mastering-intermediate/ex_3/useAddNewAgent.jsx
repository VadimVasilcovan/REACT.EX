export function useAddNewAgent(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [mail, setMail] = useState("");
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
      return{
        name,
        age,
        mail,
        data,
        successMessage,
        setName,
        setAge,
        setMail,
        handleAddAgentData,
        succesMessage,
        setData
      }
      
}