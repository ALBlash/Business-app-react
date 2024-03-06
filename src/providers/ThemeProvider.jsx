import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { node } from "prop-types";
import { useThemePropTypes } from "../cards/models/types/useThemeTypes";


const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [isDark, setDark] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setDark(prevDark => !prevDark);
    }, [setDark]);

    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light',
        }
    });

    const value = useMemo(() => {
        return {
            toggleDarkMode,
            isDark,
        };
    }, [toggleDarkMode, isDark])

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('ayyo something is wrong')
    }
    return context;
}






useTheme.propTypes = useThemePropTypes;


ThemeProvider.propTypes = {
    children: node.isRequired,
}

export default ThemeProvider;