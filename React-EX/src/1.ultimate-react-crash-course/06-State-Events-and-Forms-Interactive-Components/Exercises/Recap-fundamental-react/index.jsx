import { useState } from "react";
import Button from "../Shoping-card-create-update-etc/UI/button";

const anArray = ["cv1", "cv2", "cv3", "cv4"];

export default function AnotherEX() {
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  
  function addToFavorite(person) {
    setSecondList((prevList) => (
      prevList.some((p) => p.fullName === person.fullName) ? prevList : [...prevList, person]
    ));
  }

  function deleteItem(itemToDelete) {
    setFirstList((prevList) => prevList.filter((p) => p !== itemToDelete));
  }
  
  
  return (
    <>
      <p>{anArray[1]}</p>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div
          style={{ width: "50rem", height: "200px", backgroundColor: "white" }}
        >
          <AddText setFirstList={setFirstList} firstList={firstList} />
        </div>
        <div
          style={{ width: "50rem", height: "auto", backgroundColor: "white" }}
        >
          <DisplayList theList={firstList}>
            {(item) => (
              <PersonCard
                key={item.fullName}
                item={item}
                addToFavorite={addToFavorite}
                setSecondList={setSecondList}
                secondList={secondList}
                firstList={firstList}
                deleteItem={deleteItem}
              />
            )}
          </DisplayList>
       
        </div>
        <div
          style={{ width: "50rem", height: "200px", backgroundColor: "white" }}
        >   <DisplayList theList={secondList}>
        {(item) => (
          <PersonCard
            key={item.fullName}  
            item={item}
            addToFavorite={addToFavorite}
            setSecondList={setSecondList}
           
          />
        )}
      </DisplayList></div>
      </div>
    </>
  );
}

function AddText({ setFirstList, firstList }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleAdd(e) {
    e.preventDefault();


    const newPerson = { fullName: name, theAge: age, };

    if (!name || !age) {
      alert("Both name and age are required!");
    } else {
      setFirstList([...firstList, newPerson]);
      setName(""); 
      setAge("");
    }
  }

  return (
    <form onSubmit={handleAdd}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button type="submit">Add</button>
    </form>
  );
}

function DisplayList({ theList, children,  }) {
  return (
    <>
      {theList.map((item) => (
        <div key={item.fullName}>{children(item)}</div>
      ))}
    </>
  );
}

function PersonCard({ item, addToFavorite, deleteItem}) {
  const [inFavorite, setInFavorite] = useState(false);

  function handleFavorite() {
   
    addToFavorite(item); 
    setInFavorite((prev) => !prev); 
  }

  return (
    <>
      <h3 style={{ color: "black" }}>{item.fullName}</h3>
      <h3 style={{ color: "black" }}>{item.theAge}</h3>
      <button onClick={handleFavorite}>
        {inFavorite ? "Is in favorite" : "Add to favorite"}
      </button>
      <button onClick={() => deleteItem(item)}>deleteHuiete</button>
    </>
  );
}
