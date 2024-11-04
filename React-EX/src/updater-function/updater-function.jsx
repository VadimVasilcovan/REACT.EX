// updater function = A function passed as an argument te setState() usualy
// Allow for save updates from previous state
// used with multiple state updates and asynchronous function.



import React from "react";
import { useState } from "react";
 function MyComponent(){
    const[count, setCount] = useState(0)

    function increment () {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    {/*
    setNumber(number + 1);

    setNumber(0 + 1);
    setNumber(0 + 1);
    setNumber(0 + 1);
    */}


 function decrement (){
    setCount (count -1);
    setCount (count -1);
    setCount (count -1);
 }

 function reset (){
    setCount(0);
 }
 return (<div>
    <p>{count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decriment</button>
    <button onClick={reset}>reset</button>
 </div>)
}

export default MyComponent