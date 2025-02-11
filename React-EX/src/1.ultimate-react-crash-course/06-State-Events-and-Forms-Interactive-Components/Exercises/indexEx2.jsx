
export default function EX2() {
    const [showForm, setShowForm] = useState(false); 
    const [data, setData] = useState([]);
  
    const handleShowForms = () => {
      setShowForm((prev) => !prev);
    };
  
    const AddTheNewFriend = (newFriend) => {
      setData((prevData) => [...prevData, newFriend]); 
    };
  
    return (
      <>
        <ListOfFriends data={data} />
        {showForm && <Form onAddTheNewFriend={AddTheNewFriend} />}
        <Button onClick={handleShowForms}>{showForm ? "Close" : "Open"}</Button>
      </>
    );
  }
  
  function ListOfFriends({ data }) {
    return (
      <div>
        <p>List of Friends</p>
        <FriendsFullName data={data} />
      </div>
    );
  }
  
  function FriendsFullName({ data }) {
    return (
      <>
       
        {data.map((friend, index) => (
          <div key={index}>
            <p>{friend.name}</p>
            <p>{friend.surname}</p>
          </div>
        ))}
      </>
    );
  }
  
  function Form({ onAddTheNewFriend }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault(); 
  
      const newFriend = { name, surname };
      onAddTheNewFriend(newFriend); 
  
     
      setName("");
      setSurname("");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={surname} onChange={(e) => setSurname(e.target.value)} />
        <Button type="submit">Add</Button> 
      </form>
    );
  }
  
  function Button({ children, onClick }) {
    return <button onClick={onClick}>{children}</button>;
  }
  