import { useState } from "react";
import { getTime } from "./utils";

const UseStateCycle = () => {
    const [count, setCount] = useState(() => {
        console.log("in use state function", getTime());
        setTimeout(() => {
            setCount(prev => prev + 2)
        }, 2000);
        return (0);
    });

    return (
        <div>
            <div>Count: {count}</div>
            {console.log(`in render: ${getTime()}`)}
        </div>
    )
}

export default UseStateCycle;