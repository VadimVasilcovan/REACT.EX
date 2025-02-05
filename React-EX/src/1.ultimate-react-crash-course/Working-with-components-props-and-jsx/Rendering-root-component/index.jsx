import React from "react";
import Pizzas from "../pizza-miniproject";

export default function ReactEx() {
  return (
    <div>
      <Menu />
      <Headr />
      
    </div>
  );

  function Headr() {
    return <h1 style={{color: 'red', fontSize: '48px', textTransform: 'uppercase'}}>Fast React Pizza Co.</h1>;
  }

  function Menu() {
    return (
      <div>
        <h1>Our Menu</h1>
        <Pizzas />
       
      </div>
    );
  }

  /*
function Footer() {
    const hour = new Date().getHours(); // Fixed typo
    const openHour = 12;
    const closeHour = 22;

    if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
    else alert("Sorry");

    return (
      <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    );
  }
*/
}

