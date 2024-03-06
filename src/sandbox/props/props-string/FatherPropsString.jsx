import { Box, Typography } from "@mui/material"
import ChildrPropsString from "./ChildPropsString";


const FatherPropsString = () => {
    return (
        <Box sx={{ border: '2px solid green' }}>
            <Typography m={2} variant="h4" color="inital">Father Component</Typography>
            <Box sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
                width: 400,
                backgroundColor: 'primary.dark'
            }}>
                <ChildrPropsString Ari="Ariiiiee, im your father...."></ChildrPropsString>
            </Box>
        </Box>
    )
}

export default FatherPropsString;


