import axios from "axios";
const URLAPI_USERS = "https://nexusnews-iemj.onrender.com/api/users/"

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${URLAPI_USERS + "login"}`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
};

export const register = async (email, password, confirmPassword) => {
    try {
        const response = await axios.post(`${URLAPI_USERS + "register"}`, { email, password, confirmPassword });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error al intentar registrarse:', error);
        throw error;
    }
};
