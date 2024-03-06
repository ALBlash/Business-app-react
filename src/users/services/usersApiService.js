import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

export const login = async user => {
    try {
        // we recive a response and we sort of "destructe" the data out of it and return
        const { data } = await axios.post(`${apiUrl}/login`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}
export const signup = async user => {
    try {
        // we recive a response and we sort of "destructe" the data out of it and return
        const { data } = await axios.post(`${apiUrl}`, user);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const editUser = async (userId, user) => {
    try {
        const { data } = await axios.put(`${apiUrl}/${userId}`, user);
        console.log(data);
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}
export const getUsers = async () => {
    try {
        const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users");
        console.log(response);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const updateUser = async (userId, updatedUser) => {
    try {
        const response = await axios.put(`${apiUrl}/${userId}`, updatedUser);
        console.log(response);
        return response.data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}




