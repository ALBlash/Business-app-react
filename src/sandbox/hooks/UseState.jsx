import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCount(count + 1)}>+</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCount(count - 1)}>-</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCount(count * 2)}>multiply</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default UseState;