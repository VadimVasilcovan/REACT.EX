
import './parent-component.jsx'

const NameFilter = ({data, setNameFilter}) => {

return (<div>
  
    <select onChange={(e) => setNameFilter(e.target.value)}>
        <option value=''>Select a user </option>
    {data.map((user) =>(
        <option key={user.id}>{user.name}</option>
        ))}
    </select>
 
</div>)    
}

export default NameFilter