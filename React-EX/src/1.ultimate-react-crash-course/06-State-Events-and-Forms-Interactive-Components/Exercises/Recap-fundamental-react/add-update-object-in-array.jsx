import { useState } from "react";
import "./recap.css";

export default function SellingCars() {
  const [car, setCar] = useState([]);
  const [showAddMenu, setShowAddMenu] = useState(false);

  function handleShowMenu() {
    setShowAddMenu(!showAddMenu);
  }

  return (
    <div className="Main-car-div">
      <div>
        <ListOfCars
          carsList={car}
          onShowMenu={handleShowMenu}
          showAddMenu={showAddMenu}
        />
      </div>
      <div>
        <CarForm onSetCar={setCar} showAddMenu={showAddMenu} />
      </div>
    </div>
  );
}

function CarForm({ onSetCar, showAddMenu }) {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carCollor, setCarColor] = useState("");

  function onCarFormSubmit(e) {
    e.preventDefault();
    if (carCollor) {
      const id = crypto.randomUUID();

      const newCar = {
        id,
        brand: carBrand,
        model: carModel,
        year: carYear,
        color: carCollor,
      };

      onSetCar((d) => [...d, newCar]);
      setCarBrand("");
      setCarModel("");
      setCarYear("");
      setCarColor("");
    }
  }
  return (
    <>
      {showAddMenu && (
        <form onSubmit={onCarFormSubmit}>
          <label>Brand</label>
          <input
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
          />

          <label>model</label>
          <input
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />

          <label>year</label>
          <input value={carYear} onChange={(e) => setCarYear(e.target.value)} />

          <label>color</label>
          <input
            value={carCollor}
            onChange={(e) => setCarColor(e.target.value)}
          />

          <Button>Submit</Button>
        </form>
      )}
    </>
  );
}

function ListOfCars({ carsList, onShowMenu }) {
  return (
    <div className="list-of-cars">
      <p>The list of cars</p>

      {carsList.map((Caritem) => {
        return <CarCardHolder key={Caritem.id} Caritem={Caritem} />;
      })}
      <Button onClick={onShowMenu}>Add new car</Button>
    </div>
  );
}

function CarCardHolder({ Caritem }) {
  return (
    <span>
      <p>
        Brand:{Caritem.brand} Model:{Caritem.model} Year:{Caritem.year} color:
        {Caritem.color}
      </p>
    </span>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
