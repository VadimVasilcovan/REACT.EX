import { useState } from "react";
import './filter.css';

const FilterFun = () => {
    const [value, setValue] = useState('');
    const [selectValue, setSelectedValue] = useState(null);
    const [mileageValue, setMileageValue] = useState('');
    const [selectMileageValue, setSelectMileageValue] = useState(null);

    const carsBrands = [
        { id: 1, manufacturer: 'Mercedes', HP: 300, mileage: 15000 },
        { id: 2, manufacturer: 'BMW', HP: 320, mileage: 12000 },
        { id: 3, manufacturer: 'Audi', HP: 310, mileage: 18000 },
        { id: 4, manufacturer: 'Tesla', HP: 670, mileage: 8000 },
        { id: 5, manufacturer: 'Ford', HP: 290, mileage: 22000 },
        { id: 6, manufacturer: 'Chevrolet', HP: 275, mileage: 25000 },
        { id: 7, manufacturer: 'Honda', HP: 200, mileage: 30000 },
        { id: 8, manufacturer: 'Toyota', HP: 205, mileage: 27000 },
        { id: 9, manufacturer: 'Nissan', HP: 210, mileage: 23000 },
        { id: 10, manufacturer: 'Lexus', HP: 308, mileage: 15000 },
        { id: 11, manufacturer: 'Porsche', HP: 420, mileage: 10000 }
    ];

    const WriteValueFun = (event) => {
        setValue(event.target.value);
    }

    const handleValue = () => {
        setSelectedValue(Number(value));
    }

    const WriteMileageFun = (event) => {
        setMileageValue(event.target.value);
    }

    const handleValueMileage = () => {
        setSelectMileageValue(Number(mileageValue));
    }

    // Combined filter: Filter cars based on both HP and mileage criteria
    const filteredCars = carsBrands.filter(carsBrand => 
        (selectValue === null || carsBrand.HP >= selectValue) && 
        (selectMileageValue === null || carsBrand.mileage >= selectMileageValue)
    );

    const Listofcar = filteredCars.map((carsBrand) => 
        <li key={carsBrand.id}>{carsBrand.manufacturer}, {carsBrand.HP} HP, Mileage {carsBrand.mileage}</li>
    );

    return (
        <div className="main-div">
            <div className="input-field">
                <input
                    type="number"
                    value={value}
                    onChange={WriteValueFun}
                    placeholder="Minimum HP"
                />
                <button onClick={handleValue}>Filter by HP</button>
                <input
                    type="number"
                    value={mileageValue}
                    onChange={WriteMileageFun}
                    placeholder="Maximum Mileage"
                />
                <button onClick={handleValueMileage}>Filter by Mileage</button>
            </div>
            <div className="value-div">{selectValue} {selectMileageValue}</div>
            <ul>{Listofcar}</ul>
           
        </div>
    );
}

export default FilterFun;
