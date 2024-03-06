import { useUser } from "../../users/providers/UserProvider";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import useCards from "../hooks/useCards";
import cardSchema from "../models/joi-schema/cardSchema";
import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import CardForm from "../components/CardForm";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routeModel";

const CreateCardPage = () => {
    const { handleCreateCard } = useCards();
    const { user } = useUser();
    const { value, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        handleCreateCard
    );

    // in a JSX  page u must return a component cuz its not a simple js code that 
    // we run and done, the dafdfan knows that JSX returns html... basicaly not simple
    if (!user || !user.isBusiness) return <Navigate to={ROUTES.CARDS} />;

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
                title="create card"
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
            >
            </CardForm>
        </Container>
    );
};

export default CreateCardPage;
