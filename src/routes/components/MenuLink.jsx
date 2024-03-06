import { MenuItem } from "@mui/material";
import NavBarLink from "../NavBarLink";
import makeFirstLetterCapital from '../../forms/utils/algaMethod'
import { func, object, string } from "prop-types";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {

    return (
        <NavBarLink to={navigateTo}>
            <MenuItem onClick={onClick} sx={{ ...styles }}>
                {makeFirstLetterCapital(text)}
            </MenuItem>
        </NavBarLink>
    )

};

MenuLink.propTypes = {
    text: string.isRequired,
    navigateTo: string.isRequired,
    onClick: func.isRequired,
    styles: object,
}

MenuLink.defaultProps = {
    styles: {},
}


export default MenuLink;