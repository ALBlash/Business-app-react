import { Box, Typography } from "@mui/material"

const ChildrPropsTK = ({ fname, lname }) => {
    return (
        <>
            <Box sx={{
                height: 200,
                width: 200,
                backgroundColor: 'primary.dark',
                border: '2px solid green',
                "&:hover": {
                    backgroundColor: 'error.main',
                    opacity: [0.9, 0.8, 0.7],
                    border: '3px solid black',
                    borderRadius: '4px'
                }
            }}>
                <Typography color="initial">Child Compnent</Typography>
                <Typography color="initial">{fname} {lname}</Typography>
            </Box>
        </>
    )
}

export default ChildrPropsTK;