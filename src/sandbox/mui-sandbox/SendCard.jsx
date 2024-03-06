import { Box, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card'
const CardSend = () => {
    return (
        <Card sx={{ width: 500, m: 2 }}>
            <CardActionArea>
                <CardContent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography component='p' variant='h1'>left</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography component='p' variant='h1'>right</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
export default CardSend;