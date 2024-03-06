/* eslint-disable react-hooks/exhaustive-deps */
import { useUser } from "../../users/providers/UserProvider";
import cardSchema from "../models/joi-schema/cardSchema";
// import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mapCardToModel } from "../helpers/normalization/mapCardToModel";
import ROUTES from "../../routes/routeModel";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import { Container } from "@mui/material";
import CardForm from "../components/CardForm";

const EditCardPage = () => {
    const [initialForm, setInitForm] = useState(initialCardForm);
    const navigate = useNavigate();
    // getting the id from the URL : naming it cardID;
    const { id: cardID } = useParams();

    // getting a card and updating it;
    // in useCards we have the value that does the memozation
    // and from it we extract the card
    const { handleUpdateCard, handleGetCard, value: { card } } = useCards();

    // the third one is a submit
    // the handleUpdateCard (from useCards) is expecting 2 arguments
    // 1. cardID 2. cardFromClient
    const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
        handleUpdateCard(cardID, {
            ...normalizeCard(value.data),
            // we set the next 2 with the data we got from the last API call
            // which was "handleUpdateCard"
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        });
    });

    const { user } = useUser();


    useEffect(() => {
        // retriving the card from api with the ID we had in the URL
        handleGetCard(cardID).then((data) => {
            // check if the user is an admin
            const isAdmin = user && user.isAdmin;

            // if the user is neither the card owner nor an admin, redirect to cards page
            if (!isAdmin && user._id !== data.user_id) {
                navigate(ROUTES.CARDS);
            }

            // the way the object is built in the app and in the API are different
            const modeledCard = mapCardToModel(data);
            // setting it as the "initialForm"
            setInitForm(modeledCard);

            // we change the initial form we had from the useForm to "modeledCard"
            // if the user hits the reset button, it will turn back to the "initialCardForm"
            rest.setData(modeledCard);
        });
    }, [cardID]);


    return (
        <Container
            sx={{
                pt: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardForm
                title="update card"
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={() => rest.setData(initialForm)}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
            />
        </Container>
    );
};

export default EditCardPage;
