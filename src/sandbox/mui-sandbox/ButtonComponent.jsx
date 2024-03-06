import { Add, Send, AddShoppingCart } from "@mui/icons-material"
import DeleteSweepOutlined from "@mui/icons-material/DeleteSweepOutlined"
import { Button, Fab } from "@mui/material"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { pink } from "@mui/material/colors"

const ButtonComponent = () => {
    return (
        <Box sx={{ "& button": { m: 1 } }}>
            <Button variant="text" size="small" startIcon={<DeleteSweepOutlined />}>Simple</Button>
            <Button variant="contained" size="medium" endIcon={<Add />}>Contained</Button>
            <Button variant="outlined" size="large" endIcon={<Send />} fullWidth>outlined</Button>
            <Button variant="contained" size="medium" disabled>disabled</Button>
            <IconButton size="large" variant="contained" sx={{ color: pink[500] }}> <AddShoppingCart /></IconButton>
            <Fab color="primary" aria-label="add">
                < AddShoppingCart />
            </Fab>
        </Box>
    )
}
export default ButtonComponent 