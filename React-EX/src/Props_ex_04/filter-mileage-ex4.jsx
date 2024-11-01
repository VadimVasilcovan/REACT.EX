import './filter-parent-ex4'

const FilterMileage = ({minMileage, setMinMileage, maxMileage, setMaxMileage}) => {
    
    

    
    const writeMinMileageFun = (event) => {
        setMinMileage(event.target.value)
    }

    const writeMaxMileage = (event) => {
        setMaxMileage(event.target.value)
    }

    return(<>
    <input
    placeholder='min. Mileage'
    value={minMileage}
    type='text'
    onChange={writeMinMileageFun}
    />
    <input
    placeholder='max. Mileage'
    value={maxMileage}
    type='text'
    onChange={writeMaxMileage}
    />
    </>)
}

export default FilterMileage