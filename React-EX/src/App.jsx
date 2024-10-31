import React, { useState } from "react";

import ToDoList from "./Props_ex_03/parent-component";
import FilterParent from "./Props_ex_04/filter-parent-ex4";

const App = () => {
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
        <FilterParent/>
        </>
    );
};

export default App;
