import { Box, Typography } from "@mui/material"
import ChildrPropsTK from "./ChildPropsTwoKeys";

const FatherPropsTK = () => {
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
                <ChildrPropsTK fname={name.firstName} lname={name.lastName}></ChildrPropsTK>
            </Box>
        </Box>
    )
}

export default FatherPropsTK;