import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hotels-eb398-default-rtdb.firebaseio.com'
});

export default instance;