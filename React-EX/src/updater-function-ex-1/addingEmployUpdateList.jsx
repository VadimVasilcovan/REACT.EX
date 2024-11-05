


const AddingEmployList = ({adEmploy, 
                           setAddEmploy,
                           sybmitEmploy,
                           setSubmytEmploy}) => {


const addName = (event) => {
    setAddEmploy(a=> ({...a, Name:event.target.value}))
}

const addSurname = (event) => {
    setAddEmploy(a => ({...a, surname: event.target.value}))
}

const AddYear = (event) => {
    setAddEmploy(a => ({...a, year:event.target.value}))
}


const SubmitTask = () => {
    setSubmytEmploy([...sybmitEmploy, adEmploy])
}
    return(<div>
        <input 
        placeholder='Name'
        type='text'
        onChange={addName}
        value={adEmploy.Name}
        />
        <input 
        placeholder='surname'
        type='text'
        onChange={addSurname}
        value={adEmploy.surname}
        />
        <input 
        placeholder='year'
        type='text'
        onChange={AddYear}
        value={adEmploy.year}
        />
        <button onClick={SubmitTask}>Submit</button>
    </div>)
}

export default AddingEmployList
