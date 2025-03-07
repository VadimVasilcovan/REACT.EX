import { useEffect, useState } from "react";

export default function MasteringLocalStorage02() {
  const [data, setData] = useState("");
  const [addData, setAdddata] = useState(() => {
    const storeAddData = localStorage.getItem("data");
    return storeAddData ? JSON.parse(storeAddData) : [];
  });
  const [anotherList, setAnotherList] = useState(() => {
    const handleStoreAnoterList = localStorage.getItem("anotherData");
    return handleStoreAnoterList ? JSON.parse(handleStoreAnoterList) : [];
  });

  const handleAdd = () => {
    if (data.length > 0) {
      setAdddata([...addData, data]);
      setData("");
    }
  };

  const handleAddToNaotherList = (datahuiada) => {
    setAnotherList([...anotherList, datahuiada]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(addData));
  }, [addData]);

  useEffect(() => {
    localStorage.setItem("anotherData", JSON.stringify(anotherList));
  }, [anotherList]);

  return (
    <div>
      <div>
        <input value={data} onChange={(e) => setData(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        {addData.map((todos, index) => (
          <>
            <h2 key={index}>{todos}</h2>
            <button onClick={() => handleAddToNaotherList(todos)}>
              Add to another List
            </button>
          </>
        ))}
      </div>
      <div>
        <h1>Another list </h1>
        {anotherList.map((dataAnotherList, index) => (
          <>
            <h2 key={index}>{dataAnotherList}</h2>
          </>
        ))}
      </div>
    </div>
  );
}
