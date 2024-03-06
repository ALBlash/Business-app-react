import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
// import { FavoriteIcon, PortraitIcon } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PortraitIcon from '@mui/icons-material/Portrait';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routeModel";
import { useUser } from "../../users/providers/UserProvider";
const Footer = () => {

    const navigate = useNavigate();
    const navigateTo = to => navigate(to);
    const { user } = useUser();

    return (
        //Paper is an enviermant where u can put some txt & stuff, it has a bit of width and margin, 
        <Paper sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BottomNavigationAction onClick={() => navigateTo(ROUTES.ABOUT)} label="About" icon={<InfoIcon />} />

                {user && (
                    <BottomNavigationAction onClick={() => navigateTo(ROUTES.FAV_CARDS)} label="Favorite-cards" icon={<FavoriteIcon />} />
                )}
                {user && (user.isBusiness || user.isAdmin) && (
                    <BottomNavigationAction onClick={() => navigateTo(ROUTES.MY_CARDS)} label="my-cards" icon={<PortraitIcon />} />
                )}

            </BottomNavigation>
        </Paper>
    )
}
export default Footer;