import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton } from '@mui/material';
import NavBarLink from '../../../../routes/NavBarLink';
import ROUTES from '../../../../routes/routeModel';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useUser } from '../../../../users/providers/UserProvider';
import useUsers from '../../../../users/hooks/useUsers';
import { useTheme } from '../../../../providers/ThemeProvider';

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
    const { user } = useUser();
    const { handleLogout } = useUsers();
    const { isDark, toggleDarkMode } = useTheme();


    const onLogout = () => {
        handleLogout();
        onCloseMenu();
    };

    return (
        <MuiMenu
            open={isMenuOpen}
            onClose={onCloseMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            {user && (
                <Box>
                    <NavBarLink to={ROUTES.USER_PROFILE}>
                        <MenuItem onClick={onCloseMenu} sx={{ color: isDark ? "#e3f2fd" : "#333333" }}>Profile</MenuItem>
                    </NavBarLink>
                    <NavBarLink to={ROUTES.ABOUT}>
                        <MenuItem onClick={onCloseMenu} sx={{ color: isDark ? "#e3f2fd" : "#333333" }}>About</MenuItem>
                    </NavBarLink>
                    <NavBarLink to={ROUTES.EDIT_USER}>
                        <MenuItem onClick={onCloseMenu} sx={{ color: isDark ? "#e3f2fd" : "#333333" }}>Edit account</MenuItem>
                    </NavBarLink>
                    <NavBarLink to={ROUTES.LOGIN}>
                        <MenuItem onClick={onLogout} sx={{ color: isDark ? "#e3f2fd" : "#333333" }}>Log out</MenuItem>
                    </NavBarLink>
                    {user.isAdmin && (
                        <NavBarLink to={ROUTES.CRM}>
                            <MenuItem onClick={onCloseMenu} sx={{ color: isDark ? "#e3f2fd" : "#333333" }}>CRM</MenuItem>
                        </NavBarLink>
                    )}
                    <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
                        {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Box>
            )}
            {!user && (
                <Box>
                    <NavBarLink to={ROUTES.LOGIN}>
                        <MenuItem onClick={onCloseMenu}>Log in</MenuItem>
                    </NavBarLink>
                    <NavBarLink to={ROUTES.SIGNUP}>
                        <MenuItem onClick={onCloseMenu}>Sign up</MenuItem>
                    </NavBarLink>
                    <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
                        {!isDark ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Box>
            )}
        </MuiMenu>
    );
};

export default MenuBar;
