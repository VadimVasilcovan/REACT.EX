import { useState } from "react";

const BookcksFunction = () => {
const [boock, setboock]=useState({writer:'', tytle:'', year:''});
const [addBoock, setAddBoock]=useState([]);
const [updateBoock, setUpdateBoock]=useState(true)

    const writeWriter = (event) => {
        setboock(boocks =>({...boocks, writer: event.target.value}))
    }

    const writeTitle = (event) => {
        setboock(bookcs => ({...bookcs, tytle:event.target.value}))
    }

    const writeYear = (event) => {
        setboock(boocks => ({...boocks, year:event.target.value}))
    }

    const SubmitTheValue = () => {
        setAddBoock([...addBoock, boock])
        setboock({ writer: '', tytle: '', year:'' });
    }

    const deleteBoockFun = (deleteBoock) => {
        setAddBoock(addBook => addBook.filter((_, index) => index !== deleteBoock))
    }

    const UpdateBoockFun = (index) => {
        setboock(addBoock[index]);
        setUpdateBoock(index);
    }

    return(<div>
        <p>Add a Book</p>
        <input
        placeholder="boock writer"
        onChange={writeWriter}
        value={boock.writer}
        />
        <input
        placeholder="boock tytle"
        onChange={writeTitle}
        value={boock.tytle}
        />
        <input
        placeholder="boock year"
        onChange={writeYear}
        value={boock.year}
        type="Number"
        />
        <button onClick={SubmitTheValue}>
            {updateBoock !==null ? 'save' : 'Submit'}
        </button>
        <ul>
                {addBoock.map((boock, index) => (
                    <li key={index}>
                        {boock.writer} - {boock.tytle} ({boock.year})
                        <button onClick={() => UpdateBoockFun(index)}>Eddit</button>
                        <button onClick={() => deleteBoockFun(index)}>X</button>
                    </li>
                ))}
            </ul>
    </div>)
}
export default BookcksFunction