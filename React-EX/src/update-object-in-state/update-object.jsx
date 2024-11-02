import { useState } from "react";

const CarFunction = () => {
    const [car, setCar]=useState({year:2024, 
                                  make:'Mazda',
                                  model:6,})

    const handleYearChange = (event) => {
        /*the best practice*/
        setCar(c =>({...c, year: event.target.value})) 
        {/* Urocing Almost in the same way setCar({...car, year: event.target.value})*/}
    }
    const handleModelChange = (event) => {
        setCar(c=>({...c, model:event.target.value }))
    }
    const handlemakeChange = (event) => {
        setCar(c=>({...c,make:event.target.value}))
    }
    return (<div>
    <p>I have a brand new {car.make} {car.model} from {car.year}</p>
    <input
    placeholder="Year"
    type="Number"
    value={car.year}
    onChange={handleYearChange}
    />
    <input
    placeholder="Make"
    type="Text"
    value={car.model}
    onChange={handleModelChange}
    />
    <input
    placeholder="model"
    type="Text"
    value={car.make}
    onChange={handlemakeChange}
    />
    
    </div>)
}

export default CarFunction