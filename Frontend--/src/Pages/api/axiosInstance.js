import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5001', // Point to Flask backend on port 5001
});

export default axiosInstance;