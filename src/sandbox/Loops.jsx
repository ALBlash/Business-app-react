import { Box } from "@mui/material";

const Loops = () => {
    const arr = ["hey", "im", "Ari", "name"];
    if (!arr.length) {
        return <div>no strings were found</div>
    }

    return (
        <Box m={2}>
            {arr.map((str, index, array) => {
                return <div key={index} m={2}>{str}</div>
            })}
        </Box>
    )
}

export default Loops;