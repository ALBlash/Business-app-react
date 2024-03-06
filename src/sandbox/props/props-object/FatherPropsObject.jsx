import { Box, Typography } from "@mui/material"
import ChildrPropsObject from "./ChildPropsObject";

const FatherPropsObject = () => {
    const name = {
        firstName: 'Ari',
        lastName: 'blashnikov'
    }
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
                <ChildrPropsObject Ari={name}></ChildrPropsObject>
            </Box>
        </Box>
    )
}

export default FatherPropsObject;