import './filter-parent-ex4.jsx'


const FilterHP = ({minHp, setMinHp, maxHp, setMaxHp,
     addMinHp, setAddMinHp, addMaxHp, setAddMaxHP}) => {

    const writeMinHP = (event) => {
        setMinHp(event.target.value)
    }

    const writeMaxHP = (event) => {
        setMaxHp(event.target.value)
    }

    const AddMinHpFun = ()=> {
        setAddMinHp([...addMinHp, minHp])
    }

    const AddMaxHpFun = () => {
        setAddMaxHP([...addMaxHp, maxHp])
    }

    const AddHpFilter = () => {
        AddMinHpFun(); 
        AddMaxHpFun();
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
    <button onClick={AddHpFilter}>Add</button>
    </>)
}

export default FilterHP;