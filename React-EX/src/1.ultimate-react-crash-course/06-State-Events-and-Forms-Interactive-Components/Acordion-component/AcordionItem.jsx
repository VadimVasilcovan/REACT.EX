import { useState } from "react";

export function AcordionItem({ num, title, curOpen, onOPen, children }) {
  const isOpen = num === curOpen;
  //const Open = () => setIsOpen((isOpen) => !isOpen);

  function handleToggle() {
    onOPen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="context-box">{children}</div>}
    </div>
  );
}
