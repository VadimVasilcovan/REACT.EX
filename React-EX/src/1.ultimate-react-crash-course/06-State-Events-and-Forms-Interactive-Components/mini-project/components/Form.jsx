import { useState } from "react";
import './index.css'
//Building a form and handling submision.
export default function Form ({ onAddItems }) {
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