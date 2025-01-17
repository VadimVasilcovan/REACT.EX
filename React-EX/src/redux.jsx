import {useSelector, useDispatch} from 'react-redux';


export default function Redux(){
    
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const addCash = () => {
            dispatch({type: 'ADD_CASH', payload: 5})
    }

    const getCash = () => {
        dispatch({tyoe: 'GET_CASH', payload: 5})
    }

    
    return(<div>
        <div>
            <div>{cash}</div>
            <button onClick={() =>addCash()}>+</button>
            <button onClick={() => getCash()}>-</button>
        </div>
    </div>)
}