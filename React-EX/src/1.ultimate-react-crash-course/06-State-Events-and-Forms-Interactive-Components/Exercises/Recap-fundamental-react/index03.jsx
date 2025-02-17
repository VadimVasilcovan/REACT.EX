import { useState } from "react";

const firstArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Anna" },
  { id: 3, name: "John" },
];

const secondArray = [
  { id: 4, name: "Sophia" },
  { id: 5, name: "Michael" },
  { id: 6, name: "Sarah" },
];

export default function ArrayEx03() {
  const [array1, setArray1] = useState(firstArray);
  const [array2, setArray2] = useState(secondArray);

  function replace(personToReplace) {
    setArray1((pervarray1) =>
      pervarray1.some((p) => p.id === personToReplace.id)
        ? pervarray1
        : [...pervarray1, personToReplace]
    );
  }

  function reolaceFirstListToSecond(personToReplace) {
    setArray2((pervArray2) =>
      pervArray2.some((p) => p.id === personToReplace.id)
        ? pervArray2
        : [...pervArray2, personToReplace]
    );
  }


  function deleteIteArray1(indexToDelete){
    setArray1((pervArray1) =>pervArray1.filter((p) => p !== indexToDelete))
  }

  function deleteIteArray2(indexToDelete){
    setArray2((pervArray2) =>pervArray2.filter((p) => p !== indexToDelete))
  }
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        
      <div>
        <ArrayList listOfItems={array1}>
          {(item) => <PersonCardHolder item={item} replace={reolaceFirstListToSecond} deleteItem={deleteIteArray1}/>}
        </ArrayList>
      </div>

      <div>
        <ArrayList listOfItems={array2}>
          {(item) => <PersonCardHolder item={item} replace={replace} deleteItem={deleteIteArray2} />}
        </ArrayList>
      </div>
    </div>
  );
}

function ArrayList({ listOfItems, children }) {
  return (
    <div>
      {listOfItems.map((item) => (
        <div key={item.id}>{children(item)}</div>
      ))}
    </div>
  );
}

function PersonCardHolder({ item, replace, deleteItem }) {
  return (
    <div style={{gap: "5px"}}>
      <p>{item.id}</p>
      <p>{item.name}</p>
      <button onClick={() => replace(item)}>🙆🏿</button>
      <button onClick={() => deleteItem(item)}>❌</button>
    </div>
  );
}
