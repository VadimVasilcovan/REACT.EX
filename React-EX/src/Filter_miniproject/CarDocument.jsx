import React from "react";
import ManufacturerFilter from "./All-Filters/filter-manufacturer";
const CarDocument = () => {

    

    const carsBrands = [
        { id: 1, manufacturer: 'Mercedes', HP: 300, mileage: 15000, price: 50000, year: 2018, color: 'Black' },
        { id: 2, manufacturer: 'BMW', HP: 320, mileage: 12000, price: 55000, year: 2019, color: 'Blue' },
        { id: 3, manufacturer: 'Audi', HP: 310, mileage: 18000, price: 53000, year: 2017, color: 'White' },
        { id: 4, manufacturer: 'Tesla', HP: 670, mileage: 8000, price: 75000, year: 2020, color: 'Red' },
        { id: 5, manufacturer: 'Ford', HP: 290, mileage: 22000, price: 40000, year: 2016, color: 'Silver' },
        { id: 6, manufacturer: 'Chevrolet', HP: 275, mileage: 25000, price: 38000, year: 2015, color: 'Gray' },
        { id: 7, manufacturer: 'Honda', HP: 200, mileage: 30000, price: 25000, year: 2014, color: 'White' },
        { id: 8, manufacturer: 'Toyota', HP: 205, mileage: 27000, price: 26000, year: 2013, color: 'Black' },
        { id: 9, manufacturer: 'Nissan', HP: 210, mileage: 23000, price: 24000, year: 2013, color: 'Blue' },
        { id: 10, manufacturer: 'Lexus', HP: 308, mileage: 15000, price: 53000, year: 2018, color: 'White' },
        { id: 11, manufacturer: 'Porsche', HP: 420, mileage: 10000, price: 90000, year: 2021, color: 'Red' },
        { id: 12, manufacturer: 'Hyundai', HP: 180, mileage: 32000, price: 22000, year: 2013, color: 'Green' },
        { id: 13, manufacturer: 'Mazda', HP: 215, mileage: 29000, price: 23000, year: 2014, color: 'Yellow' },
        { id: 14, manufacturer: 'Jaguar', HP: 380, mileage: 9000, price: 65000, year: 2019, color: 'Black' },
        { id: 15, manufacturer: 'Ferrari', HP: 710, mileage: 4000, price: 200000, year: 2021, color: 'Red' },
        { id: 16, manufacturer: 'Bentley', HP: 500, mileage: 7000, price: 150000, year: 2020, color: 'Blue' },
        { id: 17, manufacturer: 'Volvo', HP: 250, mileage: 18000, price: 45000, year: 2017, color: 'Gray' },
        { id: 18, manufacturer: 'Kia', HP: 190, mileage: 28000, price: 21000, year: 2015, color: 'White' },
        { id: 19, manufacturer: 'Subaru', HP: 225, mileage: 26000, price: 27000, year: 2016, color: 'Blue' },
        { id: 20, manufacturer: 'Jeep', HP: 285, mileage: 15000, price: 37000, year: 2018, color: 'Black' },
        { id: 21, manufacturer: 'Alfa Romeo', HP: 350, mileage: 12000, price: 68000, year: 2019, color: 'Green' }
    ];
    



    const ShouAllCars=carsBrands.map(carsBrand => (
<li key={carsBrand.id}>{carsBrand.manufacturer} - {carsBrand.HP}HP / {carsBrand.mileage}km / {carsBrand.price}$</li>
    )) 
    return (<>
    <ul>{ShouAllCars}</ul>
    </>)
}

export default CarDocument











