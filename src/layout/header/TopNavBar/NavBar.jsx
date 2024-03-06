import { AppBar, Box, Toolbar } from "@mui/material";
import LeftNavBar from "./left-navigation/LeftNavBar";
import SearchBar from "./right-navigation/SearchBar";
import RightNavBar from "./right-navigation/RightNavBar";
import MenuProvider from "./menu/MenuProvider";
// import RightNavBar from "./right-navigation/RightNavBar";

// the main component that is transferd to the "header component"
const NavBar = () => {
    // thanks to the MenuProvider all the children in it have access to "setOpen" of the anchor
    return (
        <MenuProvider>
            <AppBar position="sticky">
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <LeftNavBar />

                    {/* only on xs screen */}
                    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
                        <SearchBar />
                    </Box>

                    {/* on a md:"inline-flex" */}
                    <RightNavBar />

                </Toolbar>
            </AppBar>
        </MenuProvider>
    )
}
export default NavBar;