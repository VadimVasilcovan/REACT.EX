import { useEffect, useRef, useState } from "react";

export default function EnableDisableEx() {
  const [mail, setMail] = useState("");
  const [addMail, setAddMail] = useState(() => {
    const locaLstorageFun = localStorage.getItem("addMail");
    return locaLstorageFun ? JSON.parse(locaLstorageFun) : [];
  });
  const [focus, setFocus] = useState(true);
  const [expandList, setExpandList] = useState(false);
  const focusinput = useRef(null);

  const handleExpandList = () => {
    return expandList ? addMail : addMail.slice(0, 5);
  };

  const handleExpand = () => {
    setExpandList((e) => !e);
    return;
  };

  const handleDeleteMail = (indexToDelete) => {
    setAddMail((a) => a.filter((_, index) => index !== indexToDelete));
  };

  const handleAddMail = () => {
    setAddMail([...addMail, mail]);
    setMail("");
  };

  useEffect(() => {
    const EnterClick = (e) => {
      if (e.key === "Enter" && !focus) {
        handleAddMail();
      }
    };
    document.addEventListener("keydown", EnterClick);
    return () => {
      document.removeEventListener("keydown", EnterClick);
    };
  }, [focus]);

  useEffect(() => {
    focusinput.current.focus();
  }, []);

  useEffect(() => {
    setFocus(!mail.includes("@"));
  }, [mail]);

  useEffect(() => {
    localStorage.setItem("addMail", JSON.stringify(addMail));
  }, [addMail]);

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
      {handleExpandList().map((mail, index) => (
        <div key={index}>
          <p>{mail.length >= 4 ? mail.slice(0, 4) : mail}</p>
          <button onClick={()=>handleDeleteMail(index)}>delete</button> 
        </div>
      ))}
     { addMail.length > 5 ?  <button onClick={handleExpand}>{expandList ? "hide" : "show"}</button>: <></>}
    </>
  );
}
