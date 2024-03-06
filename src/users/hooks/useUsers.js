import { useCallback, useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useUser } from "../providers/UserProvider";
import useAxios from '../../hooks/useAxios'
import { editUser, login, signup } from "../services/usersApiService";
import removeToken, { getUser, setTokenInLocalStorage } from "../services/localstorageService";
import ROUTES from '../../routes/routeModel'
import normalizeUser from "../helpers/normalization/normalizeUser";
import normalizUpdatedUser from "../helpers/normalization/normalizUpdatedUser";

// this page will run the states of our users
// we run here the life-cycle
// here we might have a list of the users or a specific user
// any CRUD of the users

const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const [query, setQuery] = useState({ q: "", isBusiness: "" });
    // to avoid any checking of the data base from every user's click
    // we have this state that containes all the cards after filteration
    // so insted of driving the server nuts we have this state to help
    const [filteredUsers, setFilteredUsers] = useState(null);

    // when the URL changes the searchParams gets updated
    // in here we won't update the searchParams only listening and using its info
    const [searchParams] = useSearchParams();

    // dont need token cuz its some string which i'll figure out somewhere else
    // but i do recive a token from the server thats why setToken
    const { user, setUser, setToken } = useUser();

    useEffect(() => {
        setQuery({
            q: searchParams.get("q") ?? "",
            isBusiness: searchParams.get("isBusiness")
        });
    }, [searchParams]);


    // filtering by the title & bizNumber, comparing with the query
    useEffect(() => {
        if (users) {
            const filtered = users.filter(u =>
                (
                    u.name.first.includes(query.q) ||
                    u.name.last.includes(query.q)
                ) && (!query.isBusiness || query.isBusiness === String(u.isBusiness))
            );
            setFilteredUsers(filtered);
        }
    }, [query, users]);

    useAxios();

    const requestStatus = useCallback((loading, errorMessage, users, user = null) => {
        setLoading(loading);
        setError(errorMessage);
        setUsers(users);
        setUser(user)
        // if the setUser Changed it means that in "useUser()" in the "value" that the "token"/"user" have changed
        // and if they change it means that there is a new or no user
    }, [setUser]);



    // so we get a new token with the126 user and the login function
    // and now who ever is in the provider will be able to use the token 
    // and it is for sure up to date
    const handleLogin = useCallback(async (user) => {
        try {
            const token = await login(user);
            setTokenInLocalStorage(token);
            setToken(token);

            const userFromLocalStorage = getUser();
            requestStatus(false, null, null, userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error.message, null, null)
        }
    }, [navigate, requestStatus, setToken]);


    const handleSignup = useCallback(async (user) => {
        try {
            // creatign a user that will be sent to the server side
            const normalizedUser = normalizeUser(user);
            // doing the sign up proccess
            await signup(normalizedUser);
            // and loggin in
            await handleLogin({ email: user.email, password: user.password });
        } catch (error) {
            requestStatus(false, error.message, null);
        }
    }, [requestStatus, handleLogin]);


    const handleEditUser = useCallback(async (userId, user) => {
        try {
            setLoading(true);
            const normalizedUser = normalizUpdatedUser(user);
            const updatedUser = await editUser({ ...userId, ...normalizedUser });
            requestStatus(false, null, null, updatedUser);
            navigate(ROUTES.CARDS);
        } catch (error) {
            requestStatus(false, error, null, null);
        }
    }, [requestStatus, navigate]);



    const handleLogout = useCallback(() => {
        removeToken();
        setToken(null);
        setUser(null);
    }, [setUser, setToken]);

    const value = useMemo(() => ({
        users,
        user,
        loading,
        error,
        filteredUsers
    }), [users, user, loading, error, filteredUsers]);


    return {
        ...value,
        handleLogin,
        handleLogout,
        handleSignup,
        handleEditUser
    }
}

export default useUsers; 