import { jwtDecode } from 'jwt-decode'

const TOKEN = 'token';

export const setTokenInLocalStorage = encodedToken => localStorage.setItem(TOKEN, encodedToken);

export const getUser = () => {
    try {
        const user = localStorage.getItem(TOKEN);
        return jwtDecode(user);
    } catch (error) {
        // its important to return null
        // cuz there is a user its just not set
        // if we return an error or some shi like that it can colapse... keep the flow
        return null;
    }
}

const removeToken = () => localStorage.removeItem(TOKEN);
export default removeToken;
export const getToken = () => localStorage.getItem(TOKEN);