/* eslint-disable no-unused-vars */
import { Box, useMediaQuery } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import MenuBar from "../right-navigation/MenuBar";
import { node } from "prop-types";

// creating a context to begin with 
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const anchorRef = useRef();

    const theme = useMuiTheme();
    // will be folowing the pixels... returns boolean (if above "md" = true)
    const screenSize = useMediaQuery(theme.breakpoints.up("md"));

    // first will be undefined cuz the html hasen't render
    // and after the render the useEfect will capture the html element with "anchorRef" 
    useEffect(() => {
        setAnchorEl(anchorRef.current);
    }, []);

    // if the screenSize is equal above "md" then useEffect will close the anchorEl
    useEffect(() => {
        setOpen(false);
    }, [screenSize]);


    // returning a provider and the value we pass is only "setOpen"
    // useEffects will take care by them selves of setting stuff, if its the anchor element in the begining...

    // if there is anchor me add the MenuBar
    return (
        <>
            <MenuContext.Provider value={setOpen}>
                {children}
            </MenuContext.Provider>
            <Box
                ref={anchorRef}
                component="span"
                position="fixed"
                top="70px"
                right="20px"
            />
            {anchorEl && (
                <MenuBar
                    isMenuOpen={isOpen}
                    anchorEl={anchorEl}
                    onCloseMenu={() => setOpen(false)}
                />
            )}
        </>
    )
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider")
    }
    return context;
}

MenuProvider.propTypes = {
    children: node.isRequired
}

export default MenuProvider;