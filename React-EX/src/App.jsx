import React, { useState } from "react";
import ShowResult from "./props/Props_2Component"; // Adjust the import path as needed
import University from "./props/Props_3Component"; // Make sure you have the University component
import JokesApp from "./Props_ex_02/Props_ex_parent";

const App = () => {
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
        <JokesApp/>
        </>
    );
};

export default App;
