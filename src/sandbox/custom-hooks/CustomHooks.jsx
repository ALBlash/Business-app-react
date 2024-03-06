import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const CustomHooks = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="custom counter hook" to="custom-counter" color="black" />
                    <NavItem label="custom name hook" to="custom-name-hook" color="black" />
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default CustomHooks;