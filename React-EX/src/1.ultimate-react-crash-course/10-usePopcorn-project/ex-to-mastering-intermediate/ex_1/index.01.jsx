import { useEffect, useRef, useState } from "react";
import { useClickEnter } from "./useClickEnter";

export default function ToDoApp() {
    const [data, setData] = useState('');
    const [toDo, setToDo] = useState(() => {
        const GetFromLocalStorage = localStorage.getItem('fasfasf');
        return GetFromLocalStorage ? JSON.parse(GetFromLocalStorage) : [];
    });

    const focus = useRef(null);

    useEffect(() => {
        if (focus.current) focus.current.focus(); // Focus input when component mounts
    }, []);

    function handleAddToDo() {
        if (data.includes('@')) {
            setToDo([...toDo, data]);
            setData('');
        }
    }

    useClickEnter(handleAddToDo); // Custom hook only handles Enter key

    useEffect(() => {
        localStorage.setItem('fasfasf', JSON.stringify(toDo));
    }, [toDo]);

    return (
        <div>
            <input
                ref={focus}
                onChange={(e) => setData(e.target.value)}
                value={data}
            />
            <button onClick={handleAddToDo}>Add</button>
            {toDo.map((toDos, index) => (
                <div key={index}>
                    <p>{toDos}</p>
                </div>
            ))}
        </div>
    );
}

