import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material';
import NavBarLink from '../../../../routes/NavBarLink';
import ROUTES from '../../../../routes/routeModel';
import { useUser } from '../../../../users/providers/UserProvider';
const LogoIcon = () => {
    const { user } = useUser();
    return (

        <NavBarLink to={user ? ROUTES.CARDS : ROUTES.ROOT}>
            <IconButton
                sx={{
                    display: { xs: 'inline-flex', md: "none" },
                    size: "large",
                    edge: "start",
                    color: "inherit",

                }}>
                {/* <Avatar src='/assets/images/business-card.png' alt='person'></Avatar> */}
                <Avatar src='/client/public/assets/images/Avatar.png' alt='person' ></Avatar>
            </IconButton>
        </NavBarLink>
    )
}
export default LogoIcon;