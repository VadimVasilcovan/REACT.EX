import React, { useState } from "react";
import ToDoList from "./Props_ex_03/parent-component";
import FilterParent from "./Props_ex_04/filter-parent-ex4";
import CarFunction from "./update-object-in-state/update-object";
import BookcksFunction from "./update-object-in-state_ex_01/update-object-in-state_ex_01";

const App = () => {
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
        <BookcksFunction/>
        </>
    );
};

export default App;
