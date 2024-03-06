import { Box, CardContent, CardHeader, Divider, Typography } from "@mui/material";
// import PropTypes from 'prop-types'


const CardBody = ({ card }) => {
    //destructering the card prop we recivied and take out the data we need
    const { title, subtitle, phone, address: { street, houseNumber, city }, bizNumber } = card;

    return (
        <CardContent>
            <CardHeader title={title} subheader={subtitle} sx={{ p: 0, mb: 1 }} />
            <Divider />
            <Box mt={1}>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle2" component="strong">Phone: {' '}</Typography>
                    {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">         {/*space */}
                    <Typography variant="subtitle2" component="strong">Address: {' '}</Typography>
                    {street} - {houseNumber} - {city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle2" component="strong">Card Number: {' '}</Typography>
                    {bizNumber}
                </Typography>
            </Box>
        </CardContent>
    )
}

// PropTypes 


export default CardBody;
