import { useEffect, useState } from "react";

export default function LocalStorageEx06() {
  const [data, setData] = useState("");
  const [adData, setAdData] = useState(() => {
    const addToLocalStorage = localStorage.getItem("Data-toDo");
    return addToLocalStorage ? JSON.parse(addToLocalStorage) : [];
  });

  const handleAdData = () => {
    if (data.length > 0) {
      setAdData([...adData, data]);
      setData("");
    }
  };

  useEffect(() => {
    const handleKeydoun = (e) => {
      if (e.key === "Enter") {
        handleAdData();
      }
    };

    document.addEventListener("keydown", handleKeydoun);

    return () => {
      document.removeEventListener("keydown", handleKeydoun);
    };
  }, [data]);

  useEffect(() => {
    localStorage.setItem("Data-toDo", JSON.stringify(adData));
  }, [adData]);

  return (
    <>
      <input value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleAdData}>Add</button>

      {adData.map((toDos, index) => (
        <p key={index}>{toDos}</p>
      ))}
    </>
  );
}
