import { useState } from "react";

const data = {
  users: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 30,
      location: "New York",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 25,
      location: "Los Angeles",
    },
  ],
};

console.log(data);

export default function ComponentComposition02() {
  const [info, setInfo] = useState(data.users);

  console.log(info);

  return (
    <>
      <Container>
        <SomeData />
      </Container>
      <Container>
        <DataList info={info}>{(i) => <ShortData i={i} />}</DataList>
      </Container>
      <Container>
        <DataList info={info}>{(i) => <LongData i={i} />}</DataList>
      </Container>
    </>
  );
}

function Container({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}></button>
      {show && children}
    </div>
  );
}

function SomeData() {
  return <div>fasfaf</div>;
}

function DataList({ children, info }) {
  return (
    <>
      {info.map((i) => (
        <div key={i.id}>{children(i)}</div>
      ))}
    </>
  );
}

function ShortData({ i }) {
  return (
    <div>
      <p>{i.name}</p>
    </div>
  );
}

function LongData({ i }) {
    const [name, setName] = useState(i.name);
  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{i.name}</p>
      <p>{i.email}</p>
      <p>{i.location}</p>
    </div>
  );
}
