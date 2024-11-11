import './parent-component.jsx'


const FilterUserName = ({username, setUserName, selectUserName, setSelectUserName}) => {

    const WriteUserName = (event) => {
        setUserName(event.target.value)
    }
    const submitUsername = () => {
        setSelectUserName([...selectUserName, username])
    }
    return(<>
        <input
        value={username}
        type='Text'
        onChange={WriteUserName}
        placeholder='Write Username'
        />
        <button onClick={submitUsername}>Submit</button>

    </>)
}


export default FilterUserName