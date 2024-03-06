import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getToken, getUser } from "../services/localstorageService";
import { node } from "prop-types";

const UserContext = createContext(null);



// we wrap the layout in the "App.js"
// request for the "token" in local if exists then it decodes it with "jwt"... if there is nothing then returns "null"

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(() => {
        const tokenFromLS = getToken();
        if (tokenFromLS) {
            const userFromLS = getUser();
            setUser(userFromLS);
        }
        return tokenFromLS;
    });

    useEffect(() => {
        if (!user) {
            // getUser returns "decoded token" basicaly a payload with data
            const userFromLS = getUser();
            setUser(userFromLS);
        }
    }, [user])


    // its an object containing the states and the methods that get updated by a change of the state
    const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

    return (
        // value = provides the states...
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a useProvider')
    }
    return context;
}

UserContext.propTypes = {
    children: node.isRequired,
}