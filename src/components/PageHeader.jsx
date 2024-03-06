import { Box, Divider, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from "../providers/ThemeProvider";

const PageHeader = ({ title, subtitle }) => {

    const { isDark } = useTheme();
    return (
        <Box pt={2} sx={{ textAlign: 'center', color: isDark ? "#e3f2fd" : "#333333" }}>
            <Typography variant="h3" component="h1">{title}</Typography>
            <Typography variant="h5" component="h5">{subtitle}</Typography>
            <Divider sx={{ my: '2' }} />
        </Box>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

// proptypes = validation
// typescript = compilation
export default PageHeader;