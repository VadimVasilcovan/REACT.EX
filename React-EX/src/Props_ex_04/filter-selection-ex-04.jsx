import './filter-selection-ex-04.css'
import './filter-parent-ex4'
import './filter-manufacturer-ex4'

const FilterSelection = ({addManufacture}) => {

    return (<div className='Selection-Filter-div'>
        {addManufacture.map((addManufacture, index) => (
            <span key={index}>{addManufacture}</span>
        ))}
    </div>)
}

export default FilterSelection