import axios from "axios";

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
     key:'AIzaSyADdc2_pX2CulasJq_8mHAl1WZQ8XPen5o'
    }
});

export default instance;