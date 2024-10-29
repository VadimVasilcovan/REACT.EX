import React from "react";
import { useState } from "react";


const ManufacturerFilter = () => {

    const [manufacturer, setManufacturer]=useState('')
    
    const SelectManufacturer = (event) =>{
        setManufacturer(event.target.value)
    }
    return(<div>
        <input
        value={manufacturer}
        type="number"
        onChange={SelectManufacturer}
        placeholder="Select Manufacturer"
        />
        
    </div>)
}
export default ManufacturerFilter