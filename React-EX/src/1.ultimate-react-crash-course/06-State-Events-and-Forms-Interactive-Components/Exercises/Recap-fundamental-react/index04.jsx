import { useState } from "react";

const jsonData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 35,
    phone: "987-654-3210",
  },
];

console.log(jsonData);

export default function ArrayEX04() {
  const [personInfo, setPersonInfo] = useState(jsonData);
  const [favoriteInfo, setFavoriteInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  function handleInsertData(itemForInsert) {
    setPersonInfo((pervPersonInfo) =>
      pervPersonInfo.some((p) => p.id === itemForInsert.id)
        ? pervPersonInfo
        : [...pervPersonInfo, itemForInsert]
    );
  }

  function addToFavorite(personInfo) {
    setFavoriteInfo((pervFavoriteInfo) =>
      pervFavoriteInfo.some((p) => p.id === personInfo.id)
        ? pervFavoriteInfo
        : [...pervFavoriteInfo, personInfo]
    );
  }
  {
  }
  function DeleteItem(ItemToDelete) {
    setPersonInfo((pervPersonInfo) =>
      pervPersonInfo.filter((p) => p !== ItemToDelete)
    );
  }

  function DeleteItemFromFavorite(ItemToDelete) {
    setFavoriteInfo((pervPersonInfo) =>
      pervPersonInfo.filter((p) => p !== ItemToDelete)
    );
  }

  function showHideFun() {
    setShow((s) => !s);
  }

  function ShowHideFavorite() {
    setShowFavorite((s) => !s);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "230px" }}>
        <ShowHideBox show={show}>
          <AddNewPerson
            setPersonInfo={setPersonInfo}
            personInfo={personInfo}
            handleInsertData={handleInsertData}
          />
        </ShowHideBox>
      </div>
      <div style={{ width: "230px", border: "solid" }}>
        <h1>List Of Person</h1>
        <button onClick={showHideFun}>
          {" "}
          {show ? "close" : "Add new person"}
        </button>
        <button onClick={ShowHideFavorite}>List O favorite</button>
        <ListOfData dataMap={personInfo}>
          {(item) => (
            <ShortListofData
              item={item}
              key={item.id}
              DeleteItem={DeleteItem}
              showHideFun={showHideFun}
              addToFavorite={addToFavorite}
            />
          )}
        </ListOfData>
      </div>
      {showFavorite && (
        <div style={{ width: "230px", border: "solid", minHeight: "300px" }}>
          <h1>The favorite List</h1>
          <ListOfData dataMap={favoriteInfo}>
            {(item) => (
              <LongListOfData
                item={item}
                DeleteItemFromFavorite={DeleteItemFromFavorite}
              />
            )}
          </ListOfData>
        </div>
      )}
    </div>
  );
}

function ListOfData({ dataMap, children }) {
  return (
    <>
      {dataMap.map((item) => (
        <div>{children(item)}</div>
      ))}
    </>
  );
}

function ShortListofData({ item, DeleteItem, addToFavorite }) {
  return (
    <div style={{ border: "solid", width: "220px" }} key={item.id}>
      <h3>Name:</h3>
      <p>{item.name}</p>
      <h3>Age:</h3>
      <p>{item.age}</p>
      <button onClick={() => DeleteItem(item)}>Delete</button>
      <button onClick={() => addToFavorite(item)}>add To Favorite</button>
    </div>
  );
}

function LongListOfData({ item, DeleteItemFromFavorite }) {
  return (
    <div style={{ border: "solid", width: "220px" }} key={item.id}>
      <h2>Name:</h2>
      <p>{item.name}</p>
      <h2>Email:</h2>
      <p>{item.email}</p>
      <h2>Age:</h2>
      <p>{item.age}</p>
      <h2>Phone:</h2>
      <p>{item.phone}</p>
      <button onClick={() => DeleteItemFromFavorite(item)}>delete</button>
    </div>
  );
}

function AddNewPerson({ personInfo, setPersonInfo }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function HandleAddNewPerson(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newPerson = {
      id,
      name: name,
      age: age,
      email: email,
      phone: phone,
    };

    if (!name || !age || !email || !phone) {
      alert('pashol nahui')
    } else {
      setPersonInfo([...personInfo, newPerson]);
      setName("");
      setAge("");
      setEmail("");
      setPhone("");
    }
  }

  return (
    <form onSubmit={HandleAddNewPerson}>
      <h1 style={{ color: "black" }}>Add a new person</h1>
      <p style={{ color: "black" }}>Write Name</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p style={{ color: "black" }}>Write Age</p>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p style={{ color: "black" }}>Write email </p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p style={{ color: "black" }}>Write phone</p>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button>Submit</button>
    </form>
  );
}

function ShowHideBox({ children, show }) {
  return <>{show && children}</>;
}
