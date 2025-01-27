
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
import UrlRequestHeaders from "./Mastering-Fetch-API/URL-Request-Headers";
import TheListOfPersonParent from "./project-filter-api/parent-component";
import CarList from "./display-data-ex/display-car";
import ParentApiEx2 from "./project-filter-api-02.jsx/parent-project-filter-api.02";
import InputExercise from "./7_days_of_recapitulation/10.12.2024/ex.10.12.2024";
import NewToDoList from "./7_days_of_recapitulation/11.12.2024/toDoList";
import CreatingList from "./7_days_of_recapitulation/11.12.2024/ex_0.2";
import ToDoListUsingProps from "./7_days_of_recapitulation/11.12.2024/ex_0.3_props/ex_0.3_parent_coponent";
import FilterMethodEX01 from "./7_days_of_recapitulation/12.12.2024/learning_filter_method/filter_method_ex.01";
import FilterMethodEX02 from "./7_days_of_recapitulation/12.12.2024/learning_filter_method/filter_method_ex.0.2";
import TaskManager from "./7_days_of_recapitulation/13.12.2024/task_manager";
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import Redux from "./redux";
import AppLazyLoading from "./lazy-loading-ex/App-lazy-Loading-ex";
import UseRefEx1 from "./react-hooks/useRef";
import UseMemoEx1 from "./useMemo/useMemo.ex.1";
import FindIndexMethod from "./array-methods/method-findIndex/index-1";
import FindIndecMethod02 from "./array-methods/method-findIndex/index-2";
import MethodExercise from "./array-methods/method-findIndex/index-3";


const App = () => {

    const defaultState = {
        cash: 0,
    }

   {/* action = {type: '', payload: '?'}*/}

    const reducer = (state=defaultState, action) => {
        switch(action.type) {
            case'ADD_CASH':
            return{...state, cash: state.cash + action.payload}
            case 'GET_CASH': 
            return{...state, cash: state.cash - action.payload}
            default:
                return state
        }

    }
    const store = createStore(reducer)
    {/*const [submitPerson, setSubmitPerson] = useState([]);*/}

    return (
        <>
            {/*<University setSubmitPerson={setSubmitPerson} />
            <ShowResult submitPerson={submitPerson} />
    */}
      


        {/* <Provider store={store}>
       <Redux/>
       </Provider>*/}
       

       <MethodExercise/>
           </>
    );
};

export default App;
