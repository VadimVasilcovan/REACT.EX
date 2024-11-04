import { useState } from "react"
import AddStudent from "./add-a-student"


const ListOfStudents = () => {
    const [student, setStudent]=useState({name:'', surname:'', year:''})
    const [addStudent, setAddStudent]=useState([])


    

    return(<div>
        <AddStudent student={student} setStudent={setStudent} addStudent={addStudent} setAddStudent={setAddStudent} />
       {addStudent.map((addStudent, index) => (
       <ul key={index}>{addStudent.name} , {addStudent.surname} is a pidor since {addStudent.year}</ul>))}
    </div>)
}

export default ListOfStudents