import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const HooksWrapper = () => {
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar >
                    <NavItem label="set posts" to="set-post" color="black"></NavItem>
                    <NavItem label="use-state" to="use-state" color="black"></NavItem>
                    <NavItem label="Use State With Array" to="Use-State-With-Array" color="black"></NavItem>
                    <NavItem label="Use State With Complex Obj" to="Use-State-With-complex-obj" color="black"></NavItem>
                    <NavItem label="Use State With Function" to="Use-State-With-function" color="black"></NavItem>
                    <NavItem label="Use State With Obj" to="Use-State-With-obj" color="black"></NavItem>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default HooksWrapper;