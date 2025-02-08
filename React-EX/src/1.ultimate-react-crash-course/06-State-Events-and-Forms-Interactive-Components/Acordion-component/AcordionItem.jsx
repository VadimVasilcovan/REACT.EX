import { useState } from "react";

export function AcordionItem({ num, title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const Open = () => setIsOpen((isOpen) => !isOpen);

    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={Open}>

            <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <div className="context-box">{text}</div>}
        </div>
    );
}
