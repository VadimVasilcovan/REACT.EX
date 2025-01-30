import { useState } from "react";

export default function FilterMethod4() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Apple', price: 1.0 },
        { id: 2, name: 'Banana', price: 0.5 },
        { id: 3, name: 'Orange', price: 1.2 }
      ]);



      //Delete an item


      const deleteItem = (indexToDelete) => {


        setCart(pervindex => pervindex.filter(i => i.id !== indexToDelete))
      }
    
    
    
    return(<div>
        {cart.map(product => (
            <ul key={product.id}>
                <li>
                   {product.name}
                   {product.price} 

                </li>
                <button onClick={() => deleteItem(product.id)}>Delete</button>    
            </ul>
        ))}
    </div>)
}