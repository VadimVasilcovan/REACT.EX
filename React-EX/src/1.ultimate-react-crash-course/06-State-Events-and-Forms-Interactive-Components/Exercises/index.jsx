import { useState } from "react";
import "./index.css";

const Cars = [
  { manufacture: "bmw", model: "m3", id: 1 },
  {
    manufacture: "mercedes",
    model: "S-class",
    id: 2,
  },
];
export default function AddingFriendEx() {
  const [data, setData] = useState(Cars);
  const [showMenu, setShowmenu] = useState(false);

  const onShowmeu = () => {
    setShowmenu((pervShoeMenu) => !pervShoeMenu);
  };

  return (
    <>
      <div className="CarCreateDisplay-main-div">
        <DisplayPost data={data} />
        {showMenu && (
          <CreateNewPost setData={setData} setShowmenu={setShowmenu} />
        )}
        <Button onClick={onShowmeu}>{showMenu ? "close" : "open"}</Button>
      </div>
    </>
  );
}

function CreateNewPost({ setData, setShowmenu }) {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      manufacture,
      model,
    };

    if ((manufacture, model)) setData((d) => [...d, newCar]);
    setManufacture("");
    setModel("");
    setShowmenu(false);
  };
  return (
    <div className="CarSecaoondaryDiv">
      <p>Create Posts</p>
      <form onSubmit={handleSubmit}>
        <input
          className="carInput"
          value={manufacture}
          onChange={(e) => setManufacture(e.target.value)}
        />
        <input
          className="carInput"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

function DisplayPost({ data }) {
  return (
    <div className="CarSecaoondaryDiv">
      <p>Display Posts</p>
      <ItemCardHolder data={data} />
    </div>
  );
}

function ItemCardHolder({ data }) {
  return (
    <>
      {data.map((car) => (
        <li key={car.id}>
          <h3>{car.manufacture}</h3>
          <h3>{car.model}</h3>
          <Button>asfa</Button>
        </li>
      ))}
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button-Car" onClick={onClick}>
      {children}
    </button>
  );
}
