import { Box, Typography } from "@mui/material"

const ChildrPropsObject = (props) => {
    const { Ari: { firstName, lastName } } = props;

    return (
        <>
            <Box sx={{
                height: 200,
                width: 200,
                backgroundColor: 'primary.dark',
                "&:hover": {
                    backgroundColor: 'error.main',
                    opacity: [0.9, 0.8, 0.7],
                    border: '3px solid black'
                }
            }}>
                <Typography color="initial">Child Compnent</Typography>
                <Typography color="initial">{firstName} - {lastName}</Typography>
            </Box>
        </>
    )
}

export default ChildrPropsObject;