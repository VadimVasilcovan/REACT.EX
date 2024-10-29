import { useState } from "react";

const University = ({ setSubmitPerson }) => {
    const [person, setPerson] = useState("");

    const WritePersonName = (event) => {
        setPerson(event.target.value);
    };

    const SubmitNewNameFun = () => {
        setSubmitPerson(prevSubmitPerson => [...prevSubmitPerson, person]);
        setPerson(""); // Clear input after submission
    };

    return (
        <>
            <input
                value={person}
                type="text"
                placeholder="write the name"
                onChange={WritePersonName}
            />
            <button onClick={SubmitNewNameFun}>Submit</button>
            <div>
                {/* This div can be used to display any feedback or state */}
            </div>
        </>
    );
};

export default University;
