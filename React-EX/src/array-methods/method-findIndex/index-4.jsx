import { useState } from "react";

export default function AdANumber() {
  const [writeValue, setWriteValue] = useState("");
  const [handreVale, setHandlValue] = useState("");
  const ListOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const WriteAnNumber = (e) => {
    setWriteValue(e.target.value);
  };

  const HandleTheValue = () => {
    setHandlValue(writeValue);
    PushDataInArray(writeValue);
  };

  const PushDataInArray = (value) => {
    const checkTheValue = ListOfNumbers.findIndex((i) => i === value);
    if (checkTheValue === -1) {
      ListOfNumbers.push(value);
    } else {
      console.log('Value already exists');
    }
  };

  return (
    <div>
      <span>
        <input
          onChange={WriteAnNumber}
          type="text"
          value={writeValue}
          placeholder="write a number"
        />
        
        <button onClick={HandleTheValue}>Add A number</button>
      </span>
      <span>
        {ListOfNumbers.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
      </span>
    </div>
  );
}
