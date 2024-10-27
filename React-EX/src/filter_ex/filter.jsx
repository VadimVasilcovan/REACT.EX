import { useState } from "react";
import './filter.css'

const FilterFun = () => {
const [value, setValue] =useState('');
const [selectValue, setSelectedValue]=useState(null);

   const carsBrands = [
    { id: 1, manufacturer: 'Mercedes', HP: 300 },
    { id: 2, manufacturer: 'BMW', HP: 320 },
    { id: 3, manufacturer: 'Audi', HP: 310 },
    { id: 4, manufacturer: 'Tesla', HP: 670 },
    { id: 5, manufacturer: 'Ford', HP: 290 },
    { id: 6, manufacturer: 'Chevrolet', HP: 275 },
    { id: 7, manufacturer: 'Honda', HP: 200 },
    { id: 8, manufacturer: 'Toyota', HP: 205 },
    { id: 9, manufacturer: 'Nissan', HP: 210 },
    { id: 10, manufacturer: 'Lexus', HP: 308 },
    { id: 11, manufacturer: 'Porsche', HP: 420 }
];

const WriteValueFun = (event) =>{
    setValue(event.target.value);
}

const handleValue = () => {
    setSelectedValue((value))
}

const filterMethod = carsBrands.filter(carsBrand => carsBrand.HP > selectValue)

const Listofcar = filterMethod.map((carsBrand) => 
    <li key={carsBrand.id}>{carsBrand.manufacturer}</li>
)
    return (<div className="main-div">
        <div className="input-field">
            <input
           
            value={value}
            onChange={WriteValueFun}
            />
            <button onClick={handleValue} >Submit</button>
        </div>
        <div>{Listofcar}</div>
    </div>)

    
}

export default FilterFun;