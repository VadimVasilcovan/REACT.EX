import React from "react";
import Pizzas from "../pizza-miniproject"; // Ensure the correct import path

export default function ReactEx() {
  return (
    <div>
      <Menu />
      <Header />  {/* Fixed typo */}
      <Footer />
    </div>
  );
}

function Header() {  // Fixed typo
  return (
    <h1 style={{ color: 'red', fontSize: '48px', textTransform: 'uppercase' }}>
      Fast React Pizza Co.
    </h1>
  );
}

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <Pizzas />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {isOpen ? <Order closeHour={closeHour} openHour={openHour}/> : (
        <p>We're happy to welcome  you between {openHour}:00 and {closeHour}: 00 </p>
      )}
     
    </footer>
  );
}

function Order({closeHour, openHour}){
    return(
        <div>
        <p>We're open from {openHour} until {closeHour}</p>
        <button className="btn">Order</button>
      </div>
    )
}
