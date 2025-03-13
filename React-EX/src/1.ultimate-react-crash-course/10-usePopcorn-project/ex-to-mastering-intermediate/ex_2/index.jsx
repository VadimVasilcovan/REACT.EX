import { useEffect, useRef, useState } from "react";

export default function Exercise002() {
  const [data, setData] = useState("");
  const [toDo, setToDo] = useState(() => {
    const handleLocalStorage = localStorage.getItem("hfss");
    return handleLocalStorage ? JSON.parse(handleLocalStorage) : [];
  });
  const focusInput = useRef(null);
  const handleAddToDo = () => {
    if (data.length > 3) {
      setToDo([...toDo, data]);
      setData("");
    }
  };

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  useEffect(() => {
    function handleEnter(e) {
      if (e.key === "Enter") {
        handleAddToDo();
      }
    }

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [data]);

  useEffect(() => {
    localStorage.getItem("hfss", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <input
        onChange={(e) => setData(e.target.value)}
        value={data}
        ref={focusInput}
      />
      <button onClick={handleAddToDo}>Add</button>
      {toDo.map((toDos, index) => (
        <p key={index}>{toDos}</p>
      ))}
    </>
  );
}
