export default function FilterMethod03 () {
    const [cart, setCart] = useState([
        { id: 1, name: 'Apple', price: 1.0 },
        { id: 2, name: 'Banana', price: 0.5 },
        { id: 3, name: 'Orange', price: 1.2 }
      ]);





      //Delete an item from the cart by id
      

      const removeItem = (idToRemove) => {
        setCart(prevCart =>prevCart.filter(i => i.id !== idToRemove))
      }

    return(<div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} 
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}