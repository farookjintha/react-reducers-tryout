import {useDispatch, useSelector} from 'react-redux';
import { increment,decrement, reset } from '../store/actions/counter.actions';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter);
    return (
        <div>
            <h1>Counter: {counter} </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;