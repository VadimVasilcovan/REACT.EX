import { useState } from "react";

export default function Ex05() {
  const [car, setCar] = useState("");
  const [mileage, setMileage] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [addNewCar, setAddNewCar] = useState([]);

  function handleAddCar(e) {
    e.preventDefault();

    const NewCar = {
      car,
      mileage,
      productionYear,
    };

    if (car && mileage && productionYear) {
      setAddNewCar(...addNewCar, NewCar);
    }
  }

  return (
    <form onSubmit={handleAddCar}>
      <input onChange={(e) => setCar(e.target.value)} />
      <input onChange={(e) => setMileage(e.target.value)} />
      <input onChange={(e) => setProductionYear(e.target.value)} />
      <button></button>
    </form>
  );
}
