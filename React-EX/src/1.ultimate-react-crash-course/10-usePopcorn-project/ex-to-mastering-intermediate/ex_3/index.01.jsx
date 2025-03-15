import { useEffect, useState } from "react";

export default function AddCarInfo() {
  const [carYear, setCarYear] = useState("");
  const [manufacturer, setManufacturer] = useState(""); 
  const [model, setModel] = useState("");
  const [addCar, setAddCar] = useState(()=>{
    const keepCarStr = localStorage.getItem('carLocalStr')
    return keepCarStr ? JSON.parse(keepCarStr) : [];
  }); 

  function handleSubmit(e) {
    e.preventDefault();

    const newCar = {
      carYear,
      manufacturer,
      model,
    };

    setAddCar([...addCar, newCar]);
    setCarYear("");
    setManufacturer(""); 
    setModel("");
  }
useEffect(()=>{
    localStorage.setItem('carLocalStr', JSON.stringify(addCar))
})
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setCarYear(e.target.value)} value={carYear} />
        <input onChange={(e) => setManufacturer(e.target.value)} value={manufacturer} />
        <input onChange={(e) => setModel(e.target.value)} value={model} />
        <button>Add new car</button>
      </form>
    </div>
  );
}
