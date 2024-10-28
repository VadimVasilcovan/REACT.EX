import React from "react";
import CarDocument from "./CarDocument";
import ManufacturerFilter from "./All-Filters/filter-manufacturer";

const FilterComponent = () => {

    return(<div>
        <div>
        <ManufacturerFilter/>
        </div>
        <div>
        <CarDocument/>
        </div>
    </div>)
}

export default FilterComponent