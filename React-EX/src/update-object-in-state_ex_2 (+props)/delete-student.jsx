


const DeleteTask = ({deletingAStudent , addStudent, setAddStudent}) => {
    

    const DeleteStudent = () => {
        setAddStudent(addStudent.filter((_, index) => index !== deletingAStudent))
    }
    return(<>
   <button onClick={() => DeleteStudent()}>Delete</button>


    </>)
}

export default DeleteTask