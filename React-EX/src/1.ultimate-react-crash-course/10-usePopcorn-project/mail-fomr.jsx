import { useEffect, useRef, useState } from "react";

export default function EnableDisableEx() {
  const [mail, setMail] = useState("");
  const [addMail, setAddMail] = useState(()=>{
    const locaLstorageFun = localStorage.getItem('addMail');
    return locaLstorageFun ? JSON.parse(locaLstorageFun) : [];
  });
  const [focus, setFocus] = useState(true);
  const focusinput = useRef(null);

  const handleAddMail = () => {
    setAddMail([...addMail, mail]);
    setMail("");
  };

  useEffect(() => {
    const EnterClick = (e) => {
      if (e.key === "Enter") {
        handleAddMail();
      }
    };
    document.addEventListener("keydown", EnterClick);
    return () => {
      document.removeEventListener("keydown", EnterClick);
    };
  }, [mail]);

  useEffect(() => {
    focusinput.current.focus();
  }, []);

  useEffect(() => {
    setFocus(!mail.includes("@"));
  }, [mail]);

  useEffect(()=>{
    localStorage.setItem('addMail', JSON.stringify(addMail))
  },[addMail])

  return (
    <>
      <input
        ref={focusinput}
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <button onClick={handleAddMail} disabled={focus}>
        Submit
      </button>
      <input disabled={true} />
      {addMail.map((mailsList, index) => (
        <div key={index}>
          <p>{mailsList}</p>
        </div>
      ))}
    </>
  );
}
