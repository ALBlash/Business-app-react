import { useCallback, useState } from "react";
import Typography from '@mui/material/Typography'
import { Box, Paper } from "@mui/material";
import ButtonComp from "./ButtonComp";
import { getCards } from "../../../cards/service/cardApiService";

const UseCounter = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);


    const incrementCount = useCallback(() => setCount(count + 1), [count]);
    const incrementAge = useCallback(() => setAge(age + 1), [age]);

    return (
        <Box>
            <Paper>
                <Typography variant="h4" color="initial">count: {count}</Typography>
                <Typography variant="h4" color="initial">age:{age}</Typography>

                <Box>
                    <ButtonComp variant="contained" name="count" value={count} color="secondary" handleClick={incrementCount}>
                        incrementCount
                    </ButtonComp>
                    <ButtonComp variant="contained" name="age" value={age} color="secondary" handleClick={incrementAge}>
                        incrementAge
                    </ButtonComp>
                    <button onClick={getCards}>cards</button>
                </Box>
            </Paper>
        </Box>
    )
}

export default UseCounter;