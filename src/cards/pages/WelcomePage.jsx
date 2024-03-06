import { Container } from "@mui/material";
import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const WelcomePage = () => {

    const { value: { error, isPending, filteredCards }, handleGetCards, handleDeleteCard, handleGetMyCards } = useCards();

    //will run once
    useEffect(() => {
        handleGetCards();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // const onDeleteCard = async cardId => {
    //     // TODO: make this functionality more efficient.
    //     await handleDeleteCard(cardId);
    //     await handleGetMyCards();
    // }

    const displayedCards = filteredCards?.slice(0, 3);

    return (
        <Container >
            <PageHeader title='Welcome to Business Cards App' subtitle='Here you can find business cards from all categories, once you sign up you are able to add your own business cards' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={displayedCards}
            // onDeleteCard={onDeleteCard}
            />
        </Container>
    )
}



export default WelcomePage;