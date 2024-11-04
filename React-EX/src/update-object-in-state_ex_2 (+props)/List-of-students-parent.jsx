// ListOfStudents component
import { useState } from "react";
import AddStudent from "./add-a-student";
import DeleteTask from "./delete-student";

const ListOfStudents = () => {
    const [student, setStudent] = useState({ name: '', 
                                             surname: '',
                                             year: '' });
                                             
    const [addStudent, setAddStudent] = useState([]);

    return (
        <div>
            <AddStudent 
                student={student} 
                setStudent={setStudent} 
                addStudent={addStudent} 
                setAddStudent={setAddStudent} 
            />
            {addStudent.map((student, index) => (
                <ul key={index}>
                    <b>Name:</b> {student.name}, 
                    <b>Surname:</b> {student.surname}, 
                    <b>Year:</b> {student.year}
                    <DeleteTask 
                        setAddStudent={setAddStudent} 
                        addStudent={addStudent} 
                        deletingAStudent={index} 
                    />
                </ul>
            ))}
        </div>
    );
};

export default ListOfStudents;