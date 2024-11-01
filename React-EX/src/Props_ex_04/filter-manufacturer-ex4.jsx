import React, { useState } from 'react';


const ManufacturerFilter = ({ manufacturer, setManufacturer, carsBrands, addManufacture, setAddManufacture }) => {

    

    const writeManufacturer = (event) => {
        setManufacturer(event.target.value); 
    }

    const addManufactureFun = () => {
        setAddManufacture([...addManufacture, manufacturer])
    }
    

    return (
        <>
            <select onChange={writeManufacturer} value={manufacturer}>
                <option value="">--Select an option--</option>
                {carsBrands.map((carsBrand, index) => (
                    <option key={index} value={carsBrand.manufacturer}>
                        {carsBrand.manufacturer}
                    </option>
                ))}
                
            </select>
            <input
            type='text'
            value={manufacturer}
            onChange={writeManufacturer}
            />
            <button onClick={addManufactureFun}>Add</button>
            
            
        </>
    );
}

export default ManufacturerFilter;
