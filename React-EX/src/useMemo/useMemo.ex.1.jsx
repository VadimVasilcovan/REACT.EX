import { useEffect, useMemo, useState } from "react";

export default function UseMemoEx1() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
 

  async function FetchData() {
    try {
      const getData = await fetch("https://dummyjson.com/products?limit=100");
      const result = await getData.json();
      setData(result.products);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  const WriteTheSearch = (e) => {
    setInput(e.target.value);
  };

  const filterData = useMemo(() => {
    return data.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
  }, [data, input]);
  return (
    <>
      <input type="text" onChange={WriteTheSearch} />
      {filterData.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
      
    </>
  );
}
