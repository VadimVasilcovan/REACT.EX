import { useEffect, useRef, useState } from "react"

export default function (){
const [data, setData] = useState('')
const [toDo, setToDo] = useState(()=>{
    const GetFromLocalStorage = localStorage.getItem('fasfasf');
    return GetFromLocalStorage ? JSON.parse(GetFromLocalStorage) : [];
})
const focus = useRef(null)

    function handleAddToDo(){
        if(data.includes('@')){
            setToDo([...toDo, data])
        }
    } 

    useEffect(()=>{
        focus.current.focus();
    },[])
    useEffect(()=>{
        const handleEnter = (e)=>{
            if(e.key === 'Enter'){
                handleAddToDo
            }
        }
        document.addEventListener('keydown', handleEnter)
        return(
            document.removeEventListener('keydown', handleAddToDo)
        )
    },[data])

    useEffect(()=>{
        localStorage.setItem('fasfasf', JSON.stringify(toDo))
    },[])

    return(<div>
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
    </div>)
}