import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/NavItem";

const LifeCycleHooks = () => {


    return (
        <>

            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="useState-cycle" to="use-state-cycle" color="black" />
                    <NavItem label="useEffect did mount" to="use-effect" color="black" />
                    <NavItem label="UseEffect Did Update" to="use-effect-update" color="black" />
                    <NavItem label="UseEffect will unmount" to="use-effect-unmount" color="black" />
                    <NavItem label="UseEffect did update - no deps" to="use-effect-update-no-deps" color="black" />
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default LifeCycleHooks;