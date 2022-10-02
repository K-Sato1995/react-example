import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter;