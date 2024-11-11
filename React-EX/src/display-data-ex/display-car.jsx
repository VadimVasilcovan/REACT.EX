import React, { useState } from "react";

// Sample car data
const cars = [
  { id: 1, name: "BMW", model: "X5", year: 2021, color: "Black" },
  { id: 2, name: "Audi", model: "Q7", year: 2022, color: "White" },
  { id: 3, name: "Tesla", model: "Model S", year: 2023, color: "Red" },
];

const CarList = () => {
  // State to track which car is currently expanded
  const [expandedCarId, setExpandedCarId] = useState(null);

  // Function to toggle the expanded state
  const toggleCarDetails = (id) => {
    setExpandedCarId(expandedCarId === id ? null : id); // Toggle open or close
  };

  return (
    <div>
      <h1>Car List</h1>
      {cars.map((car) => (
        <div key={car.id} style={{ marginBottom: "10px" }}>
          {/* Display car name as a clickable element */}
          <h2
            onClick={() => toggleCarDetails(car.id)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {car.name}
          </h2>

          {/* Show additional details if this car is expanded */}
          {expandedCarId === car.id && (
            <div style={{ marginLeft: "20px" }}>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarList;
