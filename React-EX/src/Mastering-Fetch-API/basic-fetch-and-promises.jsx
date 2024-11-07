import { useEffect } from "react"




const GetData = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => {
       // console.log(resp)
       //error checking
       console.log(resp.status)
       if(!resp.ok) throw new Error('was not a valid response');
       return resp.json(); //method to extract JSON string and convert it to an Object
    })
    .then((dataobj)=>{
        console.log(dataobj);
    })
    .catch((err) => {
        console.warn(err.message);
    });
  }, [])
  
}

export default  GetData