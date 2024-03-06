import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const PropsWrapper = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{ display: { xs: 'flex' }, flexDirection: { xs: 'column' } }}>
                    <NavItem label="props-obj" to="props-obj" color="black"></NavItem>
                    <NavItem label="props-str" to="props-str" color="black"></NavItem>
                    <NavItem label="props two-keys" to="props-two-keys" color="black"></NavItem>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default PropsWrapper;