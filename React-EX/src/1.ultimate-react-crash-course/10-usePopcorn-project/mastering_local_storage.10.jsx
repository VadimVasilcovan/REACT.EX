import { useEffect, useRef, useState } from "react";

export default function LocalStorageEx10() {
  const [data, setData] = useState("");
  const [adData, setAdData] = useState(() => {
    const localStorageconst = localStorage.getItem("someData");
    return localStorageconst ? JSON.parse(localStorageconst) : [];
  });
  const handleAdd = useRef(null);

  const handleAdData = () => {
    if (data.length > 0) {
      setAdData([...adData, data]);
      setData("");
    }
  };

  const deleteToDos = (indexToDelete) => {
    setAdData((prevAdData) => prevAdData.filter((_, index) => index !== indexToDelete));
  };
  
  useEffect(() => {
    handleAdd.current.focus();
  }, []);

  useEffect(() => {
    const addOnEnter = (e) => {
      if (e.key === "Enter") {
        handleAdData();
      }
    };
    document.addEventListener("keydown", addOnEnter);
    return () => {
      document.removeEventListener("keydown", addOnEnter);
    };
  }, [data]);

  useEffect(() => {
    localStorage.setItem("someData", JSON.stringify(adData));
  }, [adData]);

  return (
    <>
      <input
        ref={handleAdd}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdData}>Add</button>
     
      {adData.map((toDos, index) => (
  <div key={index}>
    <p>{toDos}</p>
    <button onClick={() => deleteToDos(index)}>delete</button>
  </div>
))}

    </>
  );
}
