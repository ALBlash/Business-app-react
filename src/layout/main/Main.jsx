import { node } from 'prop-types'
import { Box } from "@mui/material";
import { useTheme } from '../../providers/ThemeProvider';

const Main = ({ children }) => {
    const { isDark } = useTheme();
    return (
        <Box sx={{ minHeight: "83.5vh", backgroundColor: isDark ? '#888a8c' : '#e3f2fd' }}>
            {children}
        </Box>
    )

}

Main.propTypes = {
    children: node.isRequired
}

export default Main