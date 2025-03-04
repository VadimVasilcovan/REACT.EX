import { useEffect, useState } from "react"



export default function CurrenceConverter(){
    const [yourCurrency, setYourCurrency] = useState('')
    const [wishedCurrency, setWishedCurrency] = useState('')
    const [value, setValue] = useState('')
    const [convertedCurency, setConvertedCurreny] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = ('')

    useEffect(()=>{
        async function fetchData(){
            try{

                const data = await fetch (`https://api.frankfurter.app/latest?amount=${value}&from=${yourCurrency}&to=${wishedCurrency}`)
                const result = await data.json();
                setConvertedCurreny(result.rates[wishedCurrency]);
            }catch(err){
                
            }finally{
    
            }
        }
        fetchData();
     },[yourCurrency, wishedCurrency, value])
    

    
    return(<>
    <InputCurrency  value={value} setValue={setValue}/>
    <YourCurrenceFun currency={yourCurrency} setCurrency={setYourCurrency}/>
    <YourCurrenceFun currency={wishedCurrency} setCurrency={setWishedCurrency}/>
    <ShowResult convertedCurency={convertedCurency}/>
    </>)
 
 

}



function InputCurrency({value, setValue}){
    return(<>
    <input
        value = {value}
        type="Number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="enter currency"
    />
        </>)
}


function YourCurrenceFun({currency, setCurrency}){
    return(
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
         <option value="EUR">EU</option>
            <option value="AED">Dirham</option>
            <option value="USD">USD</option> 
        </select>
    )
}

function ShowResult({convertedCurency}){

    return(<div>
        <h1>{convertedCurency}</h1>
    </div>)
}