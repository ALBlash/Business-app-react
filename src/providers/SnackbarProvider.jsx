import React, { createContext, useCallback, useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { node } from "prop-types";

const SnackbarContext = createContext(null);

// this the function we wrap the layout in "App.js"
// and all the children that are included inside will be able to access this states
// and use in general the alerts
export const SnackbarProvider = ({ children }) => {
    //creating 4 states 1:open/close   2:snackbar message    3:snackbar color    4:set snack vvariant
    const [isSnackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("in snackbar");
    const [snackColor, setSnackColor] = useState("success");
    const [snackVariant, setSnackVariant] = useState("filled");

    // will re-render the states only when they change
    // except "setSnackOpen" cuz it has its own timer and shi...
    const setSnack = useCallback((color, message, variant = "filled") => {
        setSnackOpen(true);
        setSnackColor(color);
        setSnackVariant(variant);
        setSnackMessage(message);
    }, []);

    // SnackbarContext aka: createContext he will provide to the children
    // the updated states = setSnack;
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSnackOpen}
                onClose={() => setSnackOpen(prev => !prev)}
                autoHideDuration={3000}
            >
                <Alert severity={snackColor} variant={snackVariant}>
                    {snackMessage}
                </Alert>
            </Snackbar>

            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
        </>
    )
};


// that is the hook we will be using for example in "useCards" =   const snack = useSnackbar();
// and we will pass =  snack("success", "success");
export const useSnackbar = () => {
    // "using" the context with the "createContext"
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
};

SnackbarProvider.propTypes = {
    children: node.isRequired,
};