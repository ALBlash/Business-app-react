import { useNavigate } from "react-router-dom";
// import useUsers from "../hooks/useUsers";
import { useEffect } from "react";
import ROUTES from "../../routes/routeModel";
import PageHeader from "../../components/PageHeader";
import { useUser } from "../providers/UserProvider";
import { getUser } from "../services/usersApiService";
import useUsers from "../hooks/useUsers";

const UsersProfile = () => {

    const { ...value } = useUsers();
    // const getUser = getUser()
    const { user } = useUser();


    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user.isAdmin) navigate(ROUTES.CARDS);
    // }, []);

    // useEffect(() => {
    //     if (user._id) {
    //         getUser(user._id);
    //     }
    // }, []);

    return (
        <>
            <PageHeader title={user._id} subtitle={user.subtitle} />
            <div>{getUser(user._id)}</div>
        </>
    )



}

export default UsersProfile;