import { useState } from "react";

const FilterMethodEX02 = () => {
  const CarsList = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020, color: "White" },
    { id: 2, brand: "Honda", model: "Civic", year: 2019, color: "Black" },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021, color: "Red" },
    { id: 4, brand: "Tesla", model: "Model 3", year: 2022, color: "Blue" },
    { id: 5, brand: "BMW", model: "X5", year: 2018, color: "Silver" }
  ];

  const [characteristic, setCharacteristic] = useState('');
  const [submitCharacteristic, setSubmitCharacteristic] = useState('');

  const writeAnCharacteristic = (event) => {
    setCharacteristic(event.target.value);
  };

  const submitAnCharacteristic = () => {
    setSubmitCharacteristic(characteristic); // set to the value, not an array
  };

  // Directly filter cars based on the submitted characteristic
  const filteredCars = CarsList.filter(car => 
    car.id == submitCharacteristic // You could filter by any property, like brand, color, etc.
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={characteristic}
          onChange={writeAnCharacteristic}
        />
        <button onClick={submitAnCharacteristic}>Submit</button>
      </div>
      <div>
        {/* Render the filtered cars */}
        {filteredCars.map(car => (
          <h2 key={car.id}>
            {car.brand} - {car.model} ({car.year}) - {car.color}
          </h2>
        ))}
      </div>
    </>
  );
};

export default FilterMethodEX02;
