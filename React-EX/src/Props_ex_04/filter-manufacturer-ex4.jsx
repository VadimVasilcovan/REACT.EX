import React from 'react';


const ManufacturerFilter = ({ manufacturer, setManufacturer, carsBrands }) => {
    const writeManufacturer = (event) => {
        setManufacturer(event.target.value); 
    }

    return (
        <>
            <select onChange={writeManufacturer} value={manufacturer}>
                <option value="">--Select an option--</option>
                {carsBrands.map((carsBrand, index) => (
                    <option key={index} value={carsBrand.HP}>
                        {carsBrand.HP}
                    </option>
                ))}
                <option value="custom">Other</option>
            </select>
            
            
            {manufacturer === 'custom' && (
                <input 
                    type="text" 
                    value={manufacturer} 
                    onChange={writeManufacturer} 
                    placeholder="Enter custom manufacturer" 
                />
            )}
        </>
    );
}

export default ManufacturerFilter;
