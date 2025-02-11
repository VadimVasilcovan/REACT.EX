import { useState } from "react";

export default function AddingFriendEx() {
  const [showForm, setShowForm] = useState(false); // Fixed: Renamed `seShowForm` to `setShowForm`
  const [data, setData] = useState([]);

  const handleShowForms = () => {
    setShowForm((prev) => !prev); // Fixed: Corrected function name reference
  };

  const AddTheNewFriend = (newFriend) => {
    setData((prevData) => [...prevData, newFriend]); // Fixed: Using previous state correctly
  };

  return (
    <>
      <ListOfFriends data={data} />
      {showForm && <Form onAddTheNewFriend={AddTheNewFriend} />} {/* Fixed: Removed unused `setData` prop */}
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
      {/* Fixed: `data` is an array, so we need to map over it */}
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
    e.preventDefault(); // Fixed: Prevent form from refreshing the page

    const newFriend = { name, surname };
    onAddTheNewFriend(newFriend); // Fixed: Used passed-down function correctly

    // Clear input fields after submission
    setName("");
    setSurname("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={surname} onChange={(e) => setSurname(e.target.value)} />
      <Button type="submit">Add</Button> {/* Fixed: Added `type="submit"` */}
    </form>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
