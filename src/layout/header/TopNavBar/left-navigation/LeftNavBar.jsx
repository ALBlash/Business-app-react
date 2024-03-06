import { Box } from "@mui/material";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routeModel";
import { useUser } from "../../../../users/providers/UserProvider";
import { useTheme } from "../../../../providers/ThemeProvider";

const LeftNavBar = () => {
    const { user } = useUser();
    const { isDark } = useTheme();

    return (
        <Box>
            {/* when we reach "xs" screen then the logoIcon will show business-card */}
            <LogoIcon />
            {/* BCards will be xs:"none" */}
            <Logo />

            <Box sx={{ display: { xs: "none", md: 'inline-flex' } }}>
                <NavItem label="About" to={ROUTES.ABOUT} color={isDark ? "#e3f2fd" : "#333333"}></NavItem>
                {user && (user.isBusiness || user.isAdmin) && (
                    <>
                        <NavItem label="My Cards" to={ROUTES.MY_CARDS} color={isDark ? "#e3f2fd" : "#333333"}></NavItem>
                        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} color={isDark ? "#e3f2fd" : "#333333"}></NavItem>
                    </>
                )}
                {user && user.isAdmin && (
                    <NavItem label="Sandbox" to={ROUTES.SANDBOX} color={isDark ? "#e3f2fd" : "#333333"} ></NavItem>
                )}
            </Box>
        </Box>
    );
};

export default LeftNavBar;
