import {useSelector, useDispatch} from 'react-redux';


export default function Redux(){
    
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const addCash = (cash) => {
            dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    
    return(<div>
        <div>
            <div>{cash}</div>
            <button onClick={() =>addCash(Number(prompt()))}>+</button>
            <button onClick={() => getCash(Number(prompt()))}>-</button>
        </div>
    </div>)
}