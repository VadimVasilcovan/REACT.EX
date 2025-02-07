import { useState } from "react";
import "../mini-project/index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "spun", quantity: 1, packed: false },
];

export default function TravelingList() {
  const [items, setItem] = useState([])

  function handleAddItems (item){
    setItem(items => [...items, item])
  }

  function handleDeleteItem (itemTodelete){
     setItem(items=> items.filter(index => index.id !== itemTodelete))
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDelete={handleDeleteItem}/>
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1> 👽Far Away☠️</h1>;
};

//Building a form and handling submision.
const Form = ({onAddItems}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  

 
  const handeleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);


    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handeleSubmit}>
      <h3>What do you need fr you trip🧗🏿‍♀️</h3>
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
          {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handeleSubmit}>Add</button>
    </form>
  );
};

const PackingList = ({items, onDelete }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDelete }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer>
      <em>🙈You have X items on your list, and you already packed X (X)</em>;
    </footer>
  );
};
