/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import Container from '@mui/material/Container'
import CardsFeedback from "../components/CardsFeedback";
import PageHeader from "../../components/PageHeader"

const FavCardsPage = () => {
    const { value, ...rest } = useCards();
    const { cards, isPending, error } = value;
    const { handleDeleteCard, handlegetFavCards } = rest;

    useEffect(() => {
        handlegetFavCards();
    }, []);

    //after deleting a card we get the cards again
    // for the update
    const onDeleteCard = useCallback(async (cardId) => {
        await handleDeleteCard(cardId);
        await handlegetFavCards();
    }, []);

    // this is the onLike function that we pass to the cardsFeedback
    const changeLikeStatus = useCallback(async () => {
        await handlegetFavCards();
    })
    //\\ 18:16//\\
    return (
        <Container>
            <PageHeader title='Favorite Cards Page' subtitle='Here you will be able to store separately your favorite cards' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
                onLike={changeLikeStatus}

            />
        </Container>
    )
}

export default FavCardsPage;