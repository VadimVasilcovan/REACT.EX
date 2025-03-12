import { useEffect, useState } from "react"

export default function (){
const [data, setData] = useState('')
const [toDo, setToDo] = useState([])

    function handleAddToDo(){
        if(data.includes('@')){
            setToDo([...toDo, data])
        }

       

    } 


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
    return(<div>
        <input
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