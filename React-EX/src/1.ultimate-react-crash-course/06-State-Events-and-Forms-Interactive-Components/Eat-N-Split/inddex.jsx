import { useState } from "react";
import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function EatNSplit() {
  const [show, setShow] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);

  const ShowElement = () => {
    setShow((s) => !s);
  };



  function handleAddFriend(newFriend){
    setAddFriend((prevFriend) => [...prevFriend, newFriend])

  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList onAddFriend={addFriend}/>
        {show && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <Button onClick={ShowElement}>{show ? "close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({onAddFriend}) {
  return (
    <ul>
      {onAddFriend.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe{friend.name}
          {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>pulalau</Button>
    </li>
  );
}

function FormAddFriend({onAddFriend}) {
  const [friendName, setFriendName] = useState("");
  const [friendIcon, setFriendIcon] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!friendName) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: friendName,
      image: `${friendIcon}?=${id}`,
      balance: 0,
    };
    setFriendName("");
    setFriendIcon("https://i.pravatar.cc/48");
    onAddFriend(newFriend);
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>🌆Image URL</label>
      <input
        type="text"
        value={friendIcon}
        onChange={(e) => setFriendIcon(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>🤑 Bill value</label>

      <input type="text" />
      <label>🙎🏻Your expense</label>

      <input type="text" />
      <label>🙆🏿 X's expense</label>

      <input type="text" disabled />
      <label>🫰🏿 Who is paying the bill</label>

      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
