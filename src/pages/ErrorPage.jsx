import { Container, Grid, Typography } from "@mui/material"
import PageHeader from "../components/PageHeader"
import NavItem from "../routes/NavItem";
import ROUTES from "../routes/routeModel";



const ErrorPage = () => {
    return (

        <Container>
            <PageHeader title="Error 404" subtitle="page not found" />
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="initial">
                        Sorry, this page does not exist
                    </Typography>
                    <NavItem label="Go back to home Page" to={ROUTES.ROOT} color="primary">

                    </NavItem>
                    {/* <Button variant="text" color="primary">
                    </Button> */}
                </Grid>
                <Grid item xs={12} md={4} justifyContent="center">
                    <img src="/assets/images/404.png" alt="broken robot" width="100%" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ErrorPage;