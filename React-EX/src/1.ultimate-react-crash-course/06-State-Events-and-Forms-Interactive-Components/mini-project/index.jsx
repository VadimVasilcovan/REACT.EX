import "../mini-project/index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "spun", quantity: 1, packed: false },
];

export default function TravelingList() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1> 👽Far Away☠️</h1>;
};


//Building a form and handling submision.
const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need fr you trip🧗🏿‍♀️</h3>
      <select>
       {Array.from({length: 20}, (_, i) => i + 1).
       map(num=><option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..."/>
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
