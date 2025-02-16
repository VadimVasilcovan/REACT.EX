import { useState } from "react";

const firstArray = [
  { id: 1, name: "Vadim" },
  { id: 2, name: "Anna" },
  { id: 3, name: "John" },
];

const secondArray = [
  { id: 4, name: "Sophia" },
  { id: 5, name: "Michael" },
  { id: 6, name: "Sarah" },
];

export default function ArrayExercises() {
  const [first, setFirst] = useState(firstArray);
  const [second, setSecond] = useState(secondArray);

  function addtoList(person) {
    setSecond((pervSecond) =>
      pervSecond.some((pervSecond) => pervSecond.id === person.id)
        ? second
        : [...second, person]
    );
  }

  function addtoList21(person) {
      setFirst((pervFirst) =>
      pervFirst.some((pervFirst) => pervFirst.id === person.id)
        ? first
        : [...first, person]
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {/* First List */}
      <div>
        <h3>First List</h3>
        <MapTheLst ArrayName={first}>
          {(item) => (
            <ItemCard key={item.id} item={item} addtoList={addtoList} />
          )}
        </MapTheLst>
      </div>

      {/* Second List */}
      <div>
        <h3>Second List</h3>
        <MapTheLst ArrayName={second}>
          {(item) => <ItemCard key={item.id} item={item} addtoList={addtoList21}/>}
        </MapTheLst>
      </div>
    </div>
  );
}

function MapTheLst({ ArrayName, children }) {
  return (
    <>
      {ArrayName.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </>
  );
}

function ItemCard({ item, addtoList }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <button onClick={() => addtoList(item)}></button>
    </div>
  );
}
