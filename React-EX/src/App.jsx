import React, { useState } from "react";
import ToDoList from "./Props_ex_03/parent-component";
import FilterParent from "./Props_ex_04/filter-parent-ex4";
import CarFunction from "./update-object-in-state/update-object";
import BookcksFunction from "./update-object-in-state_ex_01/update-object-in-state_ex_01";
import ListOfStudents from "./update-object-in-state_ex_2 (+props)/List-of-students-parent";
import MyComponent from "./updater-function/updater-function";
import AddingEmploy from "./updater-function-ex-1/AddingEmployParent";
import MyUseEfectFun from "./useEfect/useEfect";
import Demo from "./useEfect-fetching-data/useEfect-fetching-data";
import FetchDataex1 from "./useEfect-fetching-data/useEfect-fetching-data";
import PokeApi from "./useEfect-fetching-data/pokeApi-fetch-ex";
import GetData from "./Mastering-Fetch-API/basic-fetch-and-promises";
import AsyncAwaytMethod from "./Mastering-Fetch-API/async-awayt";

const App = () => {
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
       <AsyncAwaytMethod/>
        </>
    );
};

export default App;
