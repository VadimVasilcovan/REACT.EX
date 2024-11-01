import './filter-parent-ex4.jsx'


const FilterHP = ({minHp, setMinHp, maxHp, setMaxHp,
     }) => {

    const writeMinHP = (event) => {
        setMinHp(event.target.value)
    }

  
    const writeMaxHP = (event) => {
        setMaxHp(event.target.value)
    }

    return(<>
    <input
    value={minHp}
    type='text'
    onChange={writeMinHP}
    placeholder='MIN. hp'
    />
    <input
     value={maxHp}
     type='text'
     onChange={writeMaxHP}
    placeholder='MAX. hp'
    />
    </>)
}

export default FilterHP;