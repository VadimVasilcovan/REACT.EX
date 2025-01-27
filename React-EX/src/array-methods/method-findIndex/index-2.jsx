export default function FindIndecMethod02() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const MyNumber = numbers.findIndex((n) => n === 10);
  const Data = [...numbers];

  if (MyNumber === -1) {
    Data.push(20);
  } else {
    console.log("This number already exists");
  }

  return (
    <div>
      {Data.map((newValue, index) => (
        <p key={index}>{newValue}</p>
      ))}
    </div>
  );
}
