/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../routes/routeModel";
import PageHeader from "../components/PageHeader";
import useUsers from "../users/hooks/useUsers";
import { Container } from "@mui/material";
import useForm from "../forms/hooks/useForm";
import initialUserForm from "../users/helpers/initialForms/initialUserForm";
import updateSchema from "../users/models/joi-schema/updateSchema";

const EditUserPage = () => {

    const { user } = useUser();
    const { handleEditUser } = useUsers();
    const navigate = useNavigate();
    const { id: userID } = useParams();



    useEffect(async () => {
        if (!user) {
            navigate(ROUTES.CARDS)
        };
        // await handleEditUser(userID, user);
    }, []);

    const { value, ...rest } = useForm(initialUserForm, updateSchema, handleEditUser(userID, user));


    return (
        <>
            <PageHeader title="Edit Account" subtitle="edit and change what you need and submit" />
            <Container
                sx={{
                    pt: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></Container>
        </>
    );

}

export default EditUserPage;