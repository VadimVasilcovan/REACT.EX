import { useEffect, useState } from "react"



export default function  LocalStorageEx03 (){
    const [data, setData] = useState('')
    const [adData, setAdData] = useState(()=>{
        const storeData = localStorage.getItem('toDos')
        return  storeData ? JSON.parse(storeData) : [];
    })



        const handleAdData = ()=>{
            if(data.length > 0){
                setAdData([...adData, data])
                setData('')
            }
        }


        useEffect(()=>{
            localStorage.setItem('toDos', JSON.stringify(adData))
        }, [adData])
    return(<>
        <input 
        value={data}
        onChange={(e) => setData(e.target.value)}
        
        />
        <button onClick={handleAdData}>Add</button>

        {adData.map((toDos, index) => (
            <p key={index}>{toDos}</p>
        ))}
    </>)
}