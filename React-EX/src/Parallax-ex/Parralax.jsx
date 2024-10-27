
import { useState } from "react";
import large from "./assets/large.jpg";
import "./Parralax.css";

const Parallax = () => {
    return (
        <div>
            <div
                className="parallax"
                style={{ backgroundImage: `url(${large})` }} 
            >
                
            </div>
            <div className="content">
                <h2>Scroll down to see the effect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at urna eu metus malesuada consectetur.</p>
                
            </div>
            
        </div>
    );
};

export default Parallax;
