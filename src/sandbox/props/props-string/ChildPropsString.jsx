import { Box, Typography } from "@mui/material"

const ChildrPropsString = (props) => {
    const { Ari } = props;

    return (
        <>
            <Box sx={{
                height: 100,
                width: 100,
                backgroundColor: 'primary.dark',
                "&:hover": {
                    backgroundColor: 'error.main',
                    opacity: [0.9, 0.8, 0.7],
                    border: '3px solid black'
                }
            }}>
                <Typography color="initial">Child Compnent</Typography>
                <Typography color="initial">{Ari}</Typography>
            </Box>
        </>
    )
}

export default ChildrPropsString;

