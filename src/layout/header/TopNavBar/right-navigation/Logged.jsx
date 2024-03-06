import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useMenu } from "../menu/MenuProvider";

const Logged = ({ setAnchorEl }) => {

    // "Logged" is one of the children of MenuProvider so he can get value from it
    const setOpen = useMenu();
    return (
        <Tooltip title="Open Settings">
            <IconButton
                sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
                onClick={() => setOpen(true)}
            >
                <Avatar src="./assets/images/Avatar.png" alt="person"></Avatar>
            </IconButton>
        </Tooltip>
    )
}
export default Logged;