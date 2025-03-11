import { useEffect, useState } from "react";

export default function EnableDisableEx() {
  const [mail, setMail] = useState("");
  const [addMail, setAddMail] = useState([])
  const [focus, setFocus] = useState(true);


    const handleAddMail =()=> {
        setAddMail([...addMail, mail])
    }
  useEffect(() => {
    setFocus(!mail.includes("gmail"));
  }, [mail]);

  return (
    <>
      <input value={mail} onChange={(e) => setMail(e.target.value)} />
      <button onClick={handleAddMail} disabled={focus}>Submit</button>
      <input disabled={true}/>
      {addMail.map((mailsList, index) => (<div key={index}>
        <p>{mailsList}</p>
      </div>))}
    </>
  );
}
