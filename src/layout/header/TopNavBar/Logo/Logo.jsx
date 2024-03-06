import { Typography } from "@mui/material";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routeModel";
import { useUser } from "../../../../users/providers/UserProvider";
import { useTheme } from "../../../../providers/ThemeProvider";

const Logo = () => {

    const { user } = useUser();
    const { isDark } = useTheme();

    return (
        <>
            {!user && (
                <NavBarLink color={isDark ? "#e3f2fd" : "#333333"}
                    to={ROUTES.ROOT}>
                    <Typography
                        variant="h4"
                        sx={{
                            display: { xs: "none", md: "inline-flex" },
                            marginRight: 2,
                            fontFamily: "fantasy",
                        }
                        }>
                        BCard
                    </Typography >
                </NavBarLink>
            )}
            {user && (
                <NavBarLink to={ROUTES.CARDS} color={isDark ? "#e3f2fd" : "#333333"}>
                    {/* in "xs" the BCard will dissapear and will be reaplaced by "img - business-card" */}
                    <Typography
                        variant="h4"
                        sx={{
                            display: { xs: "none", md: "inline-flex" },
                            marginRight: 2,
                            fontFamily: "fantasy",
                        }
                        }>
                        BCard
                    </Typography >
                </NavBarLink>
            )}
        </>
    )
}
export default Logo;