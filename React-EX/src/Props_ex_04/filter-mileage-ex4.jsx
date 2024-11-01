import './filter-parent-ex4'

const FilterMileage = ({minMileage, setMinMileage, maxMileage, setMaxMileage, 
                        addMinMileage, setAddMinMileage,addMaxMileage, setAddMaxMileage }) => {
    
    const writeMinMileageFun = (event) => {
        setMinMileage(event.target.value)
    }

    const writeMaxMileage = (event) => {
        setMaxMileage(event.target.value)
    }

    const addMinMileageSelect = () =>{
        setAddMinMileage([...addMinMileage, minMileage])
    }

    const addMaxMileageSelect = () => {
        setAddMaxMileage([...addMaxMileage, maxMileage])
    }

    const SubmitMileageSelect = () => {
        addMinMileageSelect ();
        addMaxMileageSelect ();
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
    <button onClick={SubmitMileageSelect}>Add</button>
    </>)
}

export default FilterMileage