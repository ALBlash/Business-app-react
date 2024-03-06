/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from "react";
import { changeLikeStatus, createCard, deleteCard, getCard, getCards, getMyCards, updateCard } from "../service/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnackbar } from "../../providers/SnackbarProvider";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routeModel";
import { useUser } from "../../users/providers/UserProvider";

const useCards = () => {

    const snack = useSnackbar();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    // to avoid any checking of the data base from every user's click
    // we have this state that containes all the cards after filteration
    // so insted of driving the server nuts we have this state to help
    const [filteredCards, setFilteredCards] = useState(null);

    // when the URL changes the searchParams gets updated
    // in here we won't update the searchParams only listening and using its info
    const [searchParams] = useSearchParams();

    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useUser();

    // will be updating the "q" with every change of the state (every click);
    useEffect(() => {
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);


    // filtering by the title & bizNumber, comparing with the query
    useEffect(() => {
        if (cards) {
            const filtered = cards.filter(c => c.title.includes(query) || c.subtitle.includes(query) || String(c.bizNumber).includes(query));
            setFilteredCards(filtered);
        }
    }, [query, cards]);

    const requestStatus = (card, cards, isPending, error) => {
        setCard(card);
        setCards(cards);
        setPending(isPending);
        setError(error);
    }

    useAxios();

    const handleGetCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getCards();
            snack("success", "success")
            requestStatus(null, cards, false, null);
        } catch (error) {
            snack("error", error)
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleGetCard = useCallback(async (cardFromClient) => {
        try {
            setPending(true);
            const card = await getCard(cardFromClient);
            requestStatus(card, null, false, null);
            return card;
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleGetMyCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getMyCards();
            requestStatus(null, cards, false, null);

        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleDeleteCard = useCallback(async (cardId) => {
        try {
            setPending(true);
            await deleteCard(cardId);
            snack("success", "The business card has been successfully deleted");
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleCreateCard = useCallback(async (cardFromClient) => {
        try {
            setPending(true);
            const normalizedCard = normalizeCard(cardFromClient)
            const card = await createCard(normalizedCard);
            requestStatus(card, null, false, null);
            snack("success", "The business card has been successfully created");
            navigate(ROUTES.MY_CARDS);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
        try {
            setPending(true);
            const card = await (cardId, cardFromClient);
            requestStatus(card, null, false, null);
            snack("success", "The business card has been successfully updated");
            if (user && user.isAdmin) {
                navigate(ROUTES.CARDS)
            } else {
                navigate(ROUTES.MY_CARDS);
            }
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handleLikeCard = useCallback(async (cardId) => {
        try {
            setPending(true);
            const card = await changeLikeStatus(cardId);
            requestStatus(card, cards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const handlegetFavCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getCards();
            const favCards = cards.filter(card => !!card.likes.find(id => id === user._id));
            requestStatus(null, favCards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const value = useMemo(() => ({
        cards, card, isPending, error, filteredCards
    }), [cards, card, isPending, error, filteredCards]);


    return {
        value,
        handleGetCards,
        handleGetCard,
        handleGetMyCards,
        handleDeleteCard,
        handleCreateCard,
        handleUpdateCard,
        handleLikeCard,
        handlegetFavCards,
    };

}

export default useCards;