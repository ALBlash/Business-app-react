import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const EventsWrapper = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="On click" to="on-click" color="black"></NavItem>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default EventsWrapper;