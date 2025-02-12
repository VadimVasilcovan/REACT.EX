import { useState } from "react";
import "./recap.css";


export default function SellingCars() {
  const [car, setCar] = useState([]);
  return (
    <div className="Main-car-div">
      <div>
        <CarForm onSetCar={setCar}/>
      </div>
      <div>
        <ListOfCars carsList={car}/>
      </div>
    </div>
  );
}

function CarForm({onSetCar}) {
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carCollor, setCarColor] = useState("");

  function onCarFormSubmit(e){
    e.preventDefault()
    if (carCollor){
        const id = crypto.randomUUID();

        const newCar = {
            id, 
            brand: carBrand,
            model: carModel,
            year: carYear,
            color: carCollor 
        }
        

        onSetCar((d) => [...d, newCar])
        setCarBrand('')
        setCarModel('')
        setCarYear('')
        setCarColor('')
    }
  }
  return (
    <form onSubmit={onCarFormSubmit}>
      <label>Brand</label>
      <input value={carBrand} onChange={(e) => setCarBrand(e.target.value)} />

      <label>model</label>
      <input value={carModel} onChange={(e) => setCarModel(e.target.value)} />

      <label>year</label>
      <input value={carYear} onChange={(e) => setCarYear(e.target.value)} />

      <label>color</label>
      <input value={carCollor} onChange={(e) => setCarColor(e.target.value)} />

      <Button>Submit</Button>
    </form>
  );
}

function ListOfCars({carsList}) {
  return (
    <div className="list-of-cars">
      <p>The list of cars</p>
      {carsList.map((Caritem => {
        return<CarCardHolder key={Caritem.id} Caritem={Caritem} />
      }))}
    </div>
  );
}




function CarCardHolder({ Caritem }) {
    return (
        <span>
            <p>{Caritem.brand}</p>
            <p>{Caritem.model}</p>
            <p>{Caritem.year}</p>
            <p>{Caritem.color}</p>
        </span>
    );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
