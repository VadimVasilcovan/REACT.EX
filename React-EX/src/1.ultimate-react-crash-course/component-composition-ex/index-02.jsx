import { useState } from "react";
import './index.css'

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
  return (
    <>
      <header className="header">Pagina principala</header>
      
      <Box>
        <ListOfData data={data}>
          {(personInfo) => <ShortListOfData personInfo={personInfo} />}
        </ListOfData>
        <ListOfData data={data}>
            {(personInfo) => <LongListData personInfo={personInfo}/>}
        </ListOfData>
      </Box>
    </>
  );
}

function Box({children}) {
  return (
    <>
      <div >{children}</div>
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

function ShortListOfData({ personInfo }) {
  return (
    
    <div className="shortListPersonData">
        <div><Button>Delete</Button>
        <Button>Update</Button>
        <Button>Add to short list</Button></div>
      <div className="person-info">
      <p>Name:{personInfo.name}</p>
      <p>Age:{personInfo.age}</p>
      </div>
    </div>
  );
}


function LongListData({personInfo}){


    return(<div>
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
    </div>)
}



{/*{
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },*/}