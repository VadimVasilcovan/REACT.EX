import { useState } from "react"
import ManufacturerFilter from "./filter-manufacturer-ex4";

const FilterParent = () => {
    const [manufacturer, setManufacturer]=useState('')

    
    
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
    const manufacturerProps = {manufacturer, setManufacturer, carsBrands}

    console.log(carsBrands)
    return(<>
    <div>
        <div>
        <ManufacturerFilter {...manufacturerProps}/>
        </div>
        <div>
    {carsBrands.map((carBrand) => (
        <ul key={carBrand.id}>
            <li>Manufacturer: {carBrand.manufacturer}</li>
            <li>HP: {carBrand.HP}</li>
            <li>Mileage: {carBrand.mileage}</li>
        </ul>
    ))}
</div>
    </div>
    </>)
}

export default FilterParent