import { Box, Paper, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import ButtonComp from "./ButtonComp";

const UseCallBack = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(0);

    // this function listens to any changes that happen to age by the button & will help us with re-rendering issues
    const incrementAge = useCallback(() => setAge(age + 1), [age]);
    const incrementHeight = useCallback(() => setHeight(height + 1), [height]);

    // before we add "useCallback" and "memo"
    // this method we will see in the console.log() that is in ButtonComp that on every click both buttons are re-render
    //and that is coused by the state that has changed and made the component including both buttons to re-render, and basically re-creating a button for no reason
    // here it dosen't really matter but in bigger applications and will draw a lot of resource

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{ width: 350, my: 2 }}>
                    <Box>
                        <Typography align="center">Age: {age}</Typography>
                        <Typography align="center">height: {height}</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <ButtonComp handleClick={incrementAge} name="age" value={age}>incrementAge</ButtonComp>
                            <ButtonComp handleClick={incrementHeight} name="height" value={height}>incrementHeight</ButtonComp>
                        </Box>
                    </Box>
                </Paper>
            </Box>


        </>
    )

}

export default UseCallBack;