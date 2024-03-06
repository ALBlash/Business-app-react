// import MuiSandbox from "./mui-sandbox/MuiSandbox"
// import UseState from "./hooks/UseState";
// import UseStateWithObject from "./hooks/UseStateWithObject";
// import SetPost from "./hooks/SetPost";
// import SetPosts from "./hooks/SetPosts";
// import UseStateWithArray from "./hooks/UseStateWithArray";
// import UseStateWithComplexObject from "./hooks/UseStateWithComplesObject";
// import UseStateWithFunction from "./hooks/UseStateWithFunction";
// import FatherPropTypes from "./propTypes/FatherPropTypes";
// import FatherPropsObject from "./props/props-object/FatherPropsObject";
// import FatherPropsTK from "./props/props-two-keys/FatherPropsTwoKeys";
// import FatherPropsString from "./props/props-string/FatherPropsString";

import { Outlet } from "react-router-dom";
// import Loops from "./Loops";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
// import ROUTES from "../routes/routeModel";
// import PropTypes from "./PropTypes";

// import PositionedMenu from "./hooks/PositionedMenu";


const Sandbox = () => {


    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="loops" to="loops" color="black"></NavItem>
                    <NavItem label="Hooks" to="hooks" color="black"></NavItem>
                    <NavItem label="Events" to="events" color="black"></NavItem>
                    <NavItem label="props" to="props" color="black"></NavItem>
                    <NavItem label="Life Cycle Hooks🪝" to="Life-cycle-hooks" color="black"></NavItem>
                    <NavItem label="custom Hooks🪝" to="custom-hook" color="black"></NavItem>
                    <NavItem label="Memozation 🥸" to="memozation" color="black"></NavItem>
                    <NavItem label="context" to="context" color="black"></NavItem>
                    <NavItem label="context age" to="context-age" color="black"></NavItem>
                    <NavItem label="Formtest" to="form-test" color="black"></NavItem>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Sandbox;