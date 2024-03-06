import { bool, func } from "prop-types";

export const useThemePropTypes = {
    isDark: bool.isRequired,
    toggleDarkMode: func.isRequired,
};
