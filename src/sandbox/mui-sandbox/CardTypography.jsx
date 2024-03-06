import { Box, CardContent, Divider, Typography, CardMedia, Grid, AppBar, Toolbar, Stack, Paper } from '@mui/material';
import img from './images/Image20231123202617.png'
import Card from '@mui/material/Card'
import { Delete, Edit } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardComponent = () => {
    const imageStyles = {
        width: '100%',  // Adjust the width as needed
        height: 'auto', // Maintain aspect ratio
        borderRadius: '8px' // Add border-radius
        // Add other styles as needed
    };

    const flex = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    }
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>Welcome!</Typography>
                </Toolbar>
            </AppBar>

            <Stack
                marginTop={12}
                spacing={2}
                width={250}
                direction="row"
                divider={<Divider orientation='vertical' flexItem light />}
            >
                <Paper sx={{ p: 2 }}>one</Paper>
                <Paper sx={{ p: 2 }}>two</Paper>
                <Paper sx={{ p: 2 }}>three</Paper>
            </Stack>

            <Card sx={{ width: 320, m: 2 }}>
                {/* <CardHeader title="Card Title"></CardHeader> */}
                <Box display="flex" justifyContent="space-between" flexDirection="column">
                    <CardMedia component="img"
                        style={imageStyles}
                        src={img}
                        alt="img"
                    />
                </Box>
                <CardContent display="flex">
                    <Box style={flex}>
                        <Box mb="10px">
                            <Typography variant='h5'>forth</Typography>
                            <Typography variant='body2'>subtitle</Typography>
                        </Box>
                        <Divider orientation="horizontal" flexItem style={{ width: '100%' }} />
                        <Box style={flex}>
                            <Typography>Phone: <Typography variant='span' color='#9289a3'>050-0000000</Typography></Typography>
                            <Typography>Address: <Typography variant='span' color='#9289a3'>Shinkin 3 tel-aviv</Typography></Typography>
                            <Typography>Card Number: <Typography variant='span' color='#9289a3'>4000000</Typography></Typography>
                        </Box>
                        {/* <Box display="flex" justifyContent="space-between" mt="10px">
                        <Box>
                            <Box display="flex" gap='15px' sx={{ color: '#9289a3' }}>
                                <Delete fontSize='medium' />
                                <Home fontSize='medium' />
                            </Box>
                        </Box>
                        <Box marginLeft="10rem">
                            <Box display="flex" gap='15px' sx={{ color: '#9289a3' }}>
                                <LocalPhoneIcon fontSize='medium' />
                                <FavoriteIcon fontSize='medium' />
                            </Box>
                        </Box>
                    </Box> */}
                        <Grid container spacing={1}>
                            <Grid item xs={3} md={4} lg={2}>
                                <Delete fontSize='medium' />
                            </Grid>
                            <Grid item xs={3} md={4} lg={2}>
                                <Edit fontSize='medium' />
                            </Grid>
                            <Grid item xs={3} md={4} lg={2}>
                                <LocalPhoneIcon fontSize='medium' />
                            </Grid>
                            <Grid item xs={3} md={4} lg={2}>
                                <FavoriteIcon fontSize='medium' />
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CardComponent;