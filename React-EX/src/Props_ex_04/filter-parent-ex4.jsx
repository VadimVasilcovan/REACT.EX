import React, { useState } from "react";
import ManufacturerFilter from "./filter-manufacturer-ex4";
import FilterHP from "./filter-HP-ex4";
import FilterMileage from "./filter-mileage-ex4";
import FilterSelection from "./filter-selection-ex-04";
import './filter-ex-04.css'

const FilterParent = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [minHp, setMinHp]=useState('');
    const [maxHp, setMaxHp]=useState('');
    const [minMileage, setMinMileage]=useState('');
    const [maxMileage, setMaxMileage]=useState('');
    const [addManufacture, setAddManufacture]=useState([]);
    const [addMinHp, setAddMinHp]=useState([]);
    const [addMaxHp, setAddMaxHP]=useState([]);
    const [addMinMileage, setAddMinMileage]=useState([]);
    const [addMaxMileage, setAddMaxMileage]=useState([]);
    
    const carsBrands = [
        { id: 1, manufacturer: 'Mercedes', HP: 300, mileage: 15000 },
        { id: 12, manufacturer: 'Mercedes', HP: 500, mileage: 16000 },
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

    // Filter cars 
    const filteredCars = carsBrands.filter((car) => 
    (!addManufacture.length || addManufacture.includes(car.manufacturer)) &&
    (!addMinHp.length || car.HP >= Math.min(...addMinHp)) &&
    (!addMaxHp.length || car.HP <= Math.max(...addMaxHp)) &&
    (!addMinMileage.length || car.mileage >= Math.min(...addMinMileage))&&
    (!addMaxMileage.length || car.mileage <= Math.max(...addMaxMileage))
);
 
    
    const filterHpData = ({minHp, setMinHp, maxHp, setMaxHp,  addMinHp, setAddMinHp, addMaxHp, setAddMaxHP });
    const filterMileageData = ({minMileage, setMinMileage, maxMileage, setMaxMileage, addMinMileage, setAddMinMileage,addMaxMileage, setAddMaxMileage });

    return (
        <div > 
            <div className="FilterOptions">
            <span>
            <ManufacturerFilter
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                carsBrands={carsBrands}
                addManufacture={addManufacture} 
                setAddManufacture={setAddManufacture}
            />
            </span>
            <span>
            <FilterHP {...filterHpData}/>
            </span>
            <span>
            <FilterMileage {...filterMileageData}/>
            </span>
            <span>
            <FilterSelection 
            addManufacture={addManufacture}/>
            </span>
            </div>
            <div>
                {filteredCars.map((car) => (
                    <ul key={car.id}>
                        <li>Manufacturer: {car.manufacturer}</li>
                        <li>HP: {car.HP}</li>
                        <li>Mileage: {car.mileage}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default FilterParent;
