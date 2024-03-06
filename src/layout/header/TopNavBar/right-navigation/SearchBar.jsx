import FormControl from '@mui/material/FormControl'
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, OutlinedInput, IconButton } from '@mui/material'
import { useTheme } from '../../../../providers/ThemeProvider'
import { useSearchParams } from 'react-router-dom'



const SearchBar = () => {
    const { isDark } = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = ({ target }) => setSearchParams({ q: target.value });

    return (
        // component that containens an iconButton component
        <Box display="inline-flex">
            <FormControl variant='standard'>
                <OutlinedInput
                    sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                    placeholder='Search'
                    size='small'
                    value={searchParams?.get('q') ?? ''}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}
export default SearchBar;