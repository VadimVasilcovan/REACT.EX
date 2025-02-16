import { useState } from "react";
import "./index.css";

const jsonData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 35,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
  },

  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 35,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
    },
  },
];

console.log(jsonData);

export default function ComponentExercises03() {
  return (
    <div className="main-div">
      <MainPaige />
    </div>
  );
}

function MainPaige() {
  const [data, setData] = useState(jsonData);
  const [show, setShow] = useState(false);
  const [showShortList, setShowShortList] = useState(false);
  const [addToShortList, setAddToShortList] = useState([]);

  function handleShowMenu() {
    setShow((pervShow) => !pervShow);
  }

  function handleShowShortList() {
    setShowShortList((pervShowShortList) => !pervShowShortList);
  }

  function AddToShortList(item) {
    setAddToShortList([...addToShortList, item]);
  }

  function DeleteItem(deleteIndex) {
    setData((pervData) => pervData.filter((item) => item.id !== deleteIndex));
  }

  function DeleteFromShortList(deleteIndex) {
    setAddToShortList((pervShortList) =>
      pervShortList.filter((item) => item.id !== deleteIndex)
    );
  }
  return (
    <>
      <header className="header">Pagina principala</header>
      <Navbar>
        <Button onclick={handleShowMenu}>Add Person</Button>
        <Button onclick={handleShowShortList}>show short list </Button>
        <Filter />
        <Search />
      </Navbar>
      <div className="main-div-info">
        {show && (
          <ShowHideBox>
            <AddPerson setData={setData} data={data} />
          </ShowHideBox>
        )}
        {showShortList && (
          <ShowHideBox>
            <ListOfData data={addToShortList}>
              {(personInfo) => (
                <LongListData
                  personInfo={personInfo}
                  key={personInfo.id}
                  DeleteFromShortList={DeleteFromShortList}
                />
              )}
            </ListOfData>
          </ShowHideBox>
        )}
        <Box>
          <ListOfData data={data}>
            {(personInfo) => (
              <ShortListOfData
                key={personInfo.id}
                personInfo={personInfo}
                DeleteItem={DeleteItem}
                AddToShortList={AddToShortList}
              />
            )}
          </ListOfData>

          {/*
        <ListOfData data={data}>
            {(personInfo) => <LongListData personInfo={personInfo}/>}
        </ListOfData>
        */}
        </Box>
      </div>
    </>
  );
}

function Navbar({ children }) {
  return <header className="navbar">{children}</header>;
}

function Box({ children }) {
  return (
    <>
      <div className="box">{children}</div>
    </>
  );
}

function Button({ children, onclick }) {
  return (
    <>
      <button onClick={onclick}>{children}</button>
    </>
  );
}

function ShowHideBox({ children }) {
  return <div className="show-hide-main-div">{children}</div>;
}

function Search() {
  return (
    <>
      <input placeholder="Search" />
    </>
  );
}

function ListOfData({ data, children }) {
  return (
    <>
      {data.map((personInfo) => (
        <div className="box-info-ex" key={personInfo.id}>
          {children(personInfo)}
        </div>
      ))}
    </>
  );
}

function ShortListOfData({ personInfo, DeleteItem, AddToShortList }) {
  return (
    <div className="shortListPersonData" key={personInfo.id}>
      <div>
        <Button onclick={() => DeleteItem(personInfo.id)}>Delete</Button>
        <Button>Update</Button>
        <Button onclick={() => AddToShortList(personInfo)}>
          Add to short list
        </Button>
      </div>
      <div className="person-info">
        <p>Name:{personInfo.name}</p>
        <p>Age:{personInfo.age}</p>
      </div>
    </div>
  );
}

function LongListData({ personInfo, DeleteFromShortList }) {
  return (
    <div className="long-list-div" key={personInfo.id}>
      <Button onclick={() => DeleteFromShortList(personInfo.id)}>Delete</Button>
      <p>Name:{personInfo.name}</p>
      <p>email:{personInfo.e}</p>
      <p>age:{personInfo.age}</p>
      <div>
        <p>Adress</p>
        <p>street:{personInfo.address.street}</p>
        <p>city:{personInfo.address.city}</p>
        <p>state:{personInfo.address.state}</p>
        <p>zip: {personInfo.address.zip}</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <select>
      <option>pulalan</option>
      <option>pizdoi</option>
    </select>
  );
}

function AddPerson({ setData, data }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const newPerson = {
      // id={personInfo.length+ 1,}
      name,
      email,
      age,
      address: { street, city, state, zip },
    };
    if (name && email && age && street && city && state && zip) {
      setData([...data, newPerson]);
      setName("");
      setEmail("");
      setAge("");
      setStreet("");
      setCity("");
      setState("");
      setZip("");
    } else {
      alert("Please fill out all fields.");
    }
  }

  return (
    <form className="form-element" onSubmit={submitForm}>
      <h2>Add A new Person</h2>
      <p>name:</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>email:</p>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>age:</p>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <h2>Street</h2>
      <p>street:</p>
      <input value={street} onChange={(e) => setStreet(e.target.value)} />
      <p>city</p>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <p>state</p>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <p>zip</p>
      <input value={zip} onChange={(e) => setZip(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}


function Search(){
    
}
{
  /*{
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },*/
}
