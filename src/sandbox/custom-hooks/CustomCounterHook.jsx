import useCounter from "./useCounter";
import Button from '@mui/material/Button'

const CustomCounterHook = () => {

    const [counter, increment, decrement, reset] = useCounter(0);

    return (
        <div>
            <p> counter: {counter}</p>
            <Button variant="outlined" color="primary"
                onClick={increment} style={{ padding: 3 }}>
                increment
            </Button>
            <Button variant="outlined" color="primary"
                onClick={decrement} style={{ padding: 3 }}>
                decrement
            </Button>
            <Button variant="outlined" color="primary"
                onClick={reset} style={{ padding: 3 }}>
                reset
            </Button>
        </div>
    )
}

export default CustomCounterHook;