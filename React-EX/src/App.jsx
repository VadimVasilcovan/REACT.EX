import React, { useState } from "react";

import ToDoList from "./Props_ex_03/parent-component";

const App = () => {
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
        <ToDoList/>
        </>
    );
};

export default App;
