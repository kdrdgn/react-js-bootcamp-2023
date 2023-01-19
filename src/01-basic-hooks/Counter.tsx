import { useEffect, useState } from "react";
import { resetCounter, updateCounter, useAppDispatch, useAppSelector } from "../store";

const Counter = () => {

    const counter = useAppSelector(state => state.app.counter);
    const dispatch = useAppDispatch()

    const [count, setCount] = useState(0);
    const [newCounter, setNewCounter] = useState(0);

    useEffect(() => {
        console.log('side effect');
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        // API --->
        const timeoutId = setTimeout(() => {
            setCount(count + 1);
        },10000);
        //

        return () => {
            clearTimeout(timeoutId);
        }
    }, [count]);

    const handleIncrease = () => {
        dispatch(updateCounter(1))
    }

    const handleDecrease = () => {

    }

    const handleReset = () => {
        dispatch(resetCounter());
    }

    return (
    <div>
        <label>Count {count}</label>
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
        <div>{counter}</div>
        <button onClick={handleReset}>Reset my Counter</button>
    </div>);
}
export default Counter;