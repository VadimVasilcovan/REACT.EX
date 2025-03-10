import { useEffect, useRef, useState } from "react";

export default function LocalStorageEx09() {
  const [data, setData] = useState("");
  const [adData, setAdData] = useState(() => {
    const localStorageData = localStorage.getItem("someData");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });
  const dataRef = useRef(null);

  const handleAdData = () => {
    if (data.length > 0) {
      setAdData([...adData, data]);
      setData("");
    }
  };

  useEffect(() => {
    dataRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("someData", JSON.stringify(adData));
  }, [adData]);

  useEffect(() => {
    const handlePressEnter = (e) => {
      if (e.key === "Enter") {
        handleAdData();
      }
    };
    document.addEventListener("keydown", handlePressEnter);
    return () => {
      document.removeEventListener("keydown", handlePressEnter);
    };
  }, [data]);

  return (
    <>
      <input
        ref={dataRef}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdData}>Add</button>

      {adData.map((toDos, index) => (
        <p key={index}>{toDos}</p>
      ))}
    </>
  );
}
