import { useMemo, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const UseMemo = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(1);

    const incrementAge = () => setAge(age + 1);
    const incrementHeight = () => setHeight(height + 1);

    const slowFunction = useMemo(() => {
        console.log("slow function");
        for (let i = 0; i < 2_000; i++) { console.log(i); }
        return age * 2;
    }, [age]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper sx={{ width: 350, my: 2 }}>
                <Box>
                    <Typography align="center" color={"brown"}>Age * 2: {slowFunction}</Typography>
                    <Typography align="center">Height: {height}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={incrementAge}  >Increment Age</Button>
                        <Button onClick={incrementHeight} >Increment Height</Button>
                    </Box>
                    <Typography variant="subtitle1" color="darkkhaki">the slow function represents an "Expensive function" that will take time</Typography>
                </Box>
            </Paper>
        </Box>
    );
}

export default UseMemo;