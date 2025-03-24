import { useState } from "react";

export default function Ex05ex() {
  const [car, setCar] = useState("");
  const [mileage, setMileage] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [addNewCar, setAddNewCar] = useState([]);

  function handleAddCar(e) {
    e.preventDefault();

    const newCar = {
      car,
      mileage,
      productionYear,
    };

    if (car && mileage && productionYear) {
      setAddNewCar([...addNewCar, newCar]);
      setMileage('')
      setProductionYear('')
      setCar('')
    }
  }

  return (
    <>
    <form onSubmit={handleAddCar}>
      <input value={car} onChange={(e) => setCar(e.target.value)} />
      <input value={mileage} onChange={(e) => setMileage(e.target.value)} />
      <input value={productionYear} onChange={(e) => setProductionYear(e.target.value)} />
      <button>Add Car</button>
    </form>
    {addNewCar.map((carsList, index) =>(
        <h1 key={index}>{carsList.car} {carsList.productionYear}</h1>
    ))}
   
    </>
  );
}
