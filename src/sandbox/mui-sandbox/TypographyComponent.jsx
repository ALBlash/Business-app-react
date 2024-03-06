import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const TypographyComponent = () => {
    return (
        <>
            <Typography component="h6" variant='h4'>One</Typography>
            <Divider>Hey there!</Divider>
            <Typography align='left' component="p" variant='h2' color="primary.main">primary.main</Typography>
            <Typography component="h6" variant='h4' color="success.light">success.light</Typography>
            <Divider />
            <Typography align='right' component="h6" variant='h3' color="warning.light">warning.light</Typography>
            <Typography component="h6" variant='h5' sx={{ color: 'red' }}>One</Typography>
            <Divider >
                <Chip label="Ari"></Chip>
            </Divider>
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iusto eos ipsa ab fugit maiores nam temporibus necessitatibus ut possimus saepe officia voluptas itaque nisi aliquam, pariatur, porro dolorum doloremque.</Typography>
            <Typography noWrap>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iusto eos ipsa ab fugit maiores nam temporibus necessitatibus ut possimus saepe officia voluptas itaque nisi aliquam, pariatur, porro dolorum doloremque.</Typography>
            <p>Two</p>

        </>
    )
}

export default TypographyComponent;