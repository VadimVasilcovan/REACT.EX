import './List-of-students-parent'



const AddStudent = ({student, setStudent, addStudent, setAddStudent}) =>{

    const WriteName=(event) => {
        setStudent(students =>({...students,name: event.target.value}))
    };

    const WriteSurname=(event) => {
        setStudent(students => ({...students, surname: event.target.value}))
    }

    const WriteYear = (event) => {
        setStudent(students => ({...students, year:event. target.value}))
    }

    const HandleUpdates = () => {
        setAddStudent([...addStudent, student])
        setStudent({ name: '', surname: '', year: '' });
    }

    return(
       <div>
         <input 
        placeholder="name"
        onChange={WriteName}
        value={student.name}
        />
         <input 
        placeholder="Surname"
        onChange={WriteSurname}
        value={student.surname}
        />
        <input 
        placeholder="year"
        onChange={WriteYear}
        value={student.year}
        type='Number'
        />
        <button onClick={HandleUpdates}>Submit</button>
       </div>

    )
}

export default AddStudent