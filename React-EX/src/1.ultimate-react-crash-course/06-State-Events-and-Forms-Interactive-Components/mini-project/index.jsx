import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "spun", quantity: 1, packed: false },
];

export default function TravelingList() {
  const [items, setItem] = useState([]);

  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((index) => index.id !== id));
  }

  function handleDeleteList() {
    const confirmed = window.confirm("Are you sure you want to delete?");

    // if (confirmed)setItem([])
    confirmed && setItem([]);
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        setItem={setItem}
        items={items}
        onDelete={handleDeleteItem}
        onDeleteList={handleDeleteList}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
