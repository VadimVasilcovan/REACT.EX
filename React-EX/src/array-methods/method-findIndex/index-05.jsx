import { useState } from "react";

export default function FindIndex05() {
  const [writeValue, setWriteValue] = useState(null);
  const [ArrayOfNumber, SetArrayOfNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  // The value wrtiten by user
  const EnterTheNumber = (e) => {
    setWriteValue(Number(e.target.value));
  };

  const CheckTheNumber = (customerNumber) => {
    const checkTheValue = ArrayOfNumber.findIndex((i) => i === customerNumber);
    if (checkTheValue === -1) {
     
      ArrayOfNumber.push(customerNumber);

      SetArrayOfNumbers([...ArrayOfNumber]);
    } else {
      console.log("pashol nahui");
    }
    debugger;
  };

 

  return (
    <div>
      <div>
        <input onChange={EnterTheNumber} placeholder="Add a number" />
        <button onClick={() => CheckTheNumber(writeValue)}>button</button>
      </div>
      <div>
        {ArrayOfNumber.map((newNumber, index) => (
          <p key={index}>{newNumber}</p>
        ))}
      </div>
    </div>
  );
}
