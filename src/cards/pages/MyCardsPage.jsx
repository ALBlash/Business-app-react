import { useNavigate } from "react-router-dom";
import useCards from "../../cards/hooks/useCards";
import { useEffect } from "react";
import ROUTES from "../../routes/routeModel";
import { Container, Fab, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useUser } from "../../users/providers/UserProvider";
import { useTheme as useMuiTheme } from "@mui/material/styles";

const MyCardsPage = () => {
    const { value: { cards, isPending, error }, handleGetMyCards, handleDeleteCard } = useCards();
    const { user } = useUser();
    const navigate = useNavigate();

    const theme = useMuiTheme();
    const screenSize = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (!user) navigate(ROUTES.LOGIN);
        else handleGetMyCards();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const onDeleteCard = async cardId => {
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    };


    return (
        <>
            <PageHeader title='Your Cards' subtitle='Here you can find your business cards' />
            <Container sx={{}}>
                {" "}
                {cards && (
                    <Fab
                        color="primary"
                        aria-label=""
                        // without setting it as a function it will just run "navigate" without click
                        // when the rendering process starts he runs it on the way cuz it was not a function
                        // not operate the fun only run it
                        onClick={() => navigate(ROUTES.CREATE_CARD)}
                        // sx={{ position: 'absolute', bottom: 75, right: 16 }}
                        sx={{
                            position: 'fixed',
                            bottom: screenSize ? 70 : 70,  // Adjust the values as needed
                            right: screenSize ? '45%' : 20,  // Adjust the values as needed
                        }}
                    >
                        <AddIcon />
                    </Fab>
                )}
                <CardsFeedback
                    isPending={isPending}
                    error={error}
                    cards={cards}
                    onDeleteCard={onDeleteCard}
                />
            </Container>
        </>
    )
}
export default MyCardsPage;