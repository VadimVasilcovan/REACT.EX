import { useEffect } from "react"


const UrlRequestHeaders = () => {

    const str ='https://jsonplaceholder.typicode.com/users'
    const url= new URL(str)

    
    useEffect(()=> {
        
        fetch(url)
        console.log(url.host, url.origin, url.protocol), url.port
    }, [])
    return (<div>

    </div>)
}

export default UrlRequestHeaders