import React from "react";
import { useState, useEffect } from "react";

const MyUseEfectFun = () => {
    
    const [count, setCount]=useState(0)
    const [color, setColor]=useState('green')

    const addCount = () =>{
        setCount(c => c + 1)
    }

    const SubtractCount = () =>{
        setCount(c => c - 1)
    }

    const changeColor = () => {
    setColor(c => c === 'green' ? 'red' : 'green');
    }

    useEffect(() => {
        document.title = `Count ${count} ${color}` 
    }, [count, color])
    
    return (<div>
        <p style={{color: color}}>Count:{count}</p>
        <button onClick= {addCount}> Add</button>
        <button onClick= {SubtractCount}> Add</button> <br/>
        <button onClick={changeColor}>Change Color</button>
    </div>)
}

export default MyUseEfectFun