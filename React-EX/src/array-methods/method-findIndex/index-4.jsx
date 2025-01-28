import { useState } from "react";

export default function AdANumber() {
  const [writeValue, setWriteValue] = useState(""); // Input value
  const [newValue, SetNewValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); // List of numbers

  // Update input value when typing
  const WriteAnNumber = (e) => {
    setWriteValue(e.target.value); // Set the input value
  };

  // Add number to the list when button is clicked
  const HandleTheValue = () => {
    PushDataInArray(writeValue); // Push input value to the array
    setWriteValue(""); // Clear the input field
  };

  // Add number to the array if it doesn't already exist
  const PushDataInArray = (value) => {
    const checkTheValue = newValue.findIndex((i) => i === value); // Check if value exists
    if (checkTheValue === -1) {
      SetNewValue([...newValue, value]); // Add the value to the list
    } else {
      console.log("Value already exists");
    }
  };

  return (
    <div>
      <span>
        <input
          onChange={WriteAnNumber}
          type="text"
          value={writeValue}
          placeholder="Write a number"
        />
        <button onClick={HandleTheValue}>Add A Number</button>
      </span>
      <span>
        {newValue.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
      </span>
    </div>
  );
}
