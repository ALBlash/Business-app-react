import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const Memozation = () => {

    // const memoized = () => {
    //     const cache = {
    //         1: {
    //             1: 2
    //         }
    //     };
    //     const calculation = (a, b) => a + b

    //     return (a, b) => {
    //         if (cache[a] && cache[a][b] !== undefined) {
    //             return cache[a][b]
    //         } else {
    //             const result = calculation(a, b);
    //             cache[a] = {
    //                 b: result
    //             };
    //             return result
    //         }
    //     }
    // }

    // const memoizedCalculation = memoized();
    // memoizedCalculation(1, 1)

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{}}>
                    <NavItem label="use callback" to="use-callback" color="black"></NavItem>
                    <NavItem label="use Memo" to="use-memo" color="black"></NavItem>
                    <NavItem label="use counter" to="use-counter" color="black"></NavItem>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    );
}

export default Memozation;