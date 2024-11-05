import AddingEmployList from './addingEmployUpdateList';
import React from "react";
import { useState } from "react";



const AddingEmploy =()=> {
const [adEmploy, setAddEmploy]=useState({Name: '' , surname: '', year: ''})
const [sybmitEmploy, setSubmytEmploy] = useState([])



const WriteEnployState = {adEmploy, setAddEmploy, sybmitEmploy, setSubmytEmploy}

 

    return (<div>
        <AddingEmployList {...WriteEnployState}/>
        {sybmitEmploy.map((adEmploy ,index)  => (<ul key={index}>
            {adEmploy.Name}, {adEmploy.surname}, {adEmploy.year}
        </ul>))}
    </div>)
}
export default AddingEmploy


