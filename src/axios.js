import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:4000/'
});

axios.interceptors.request.use(config => {
    if (localStorage.getItem('userType') === 'appUser') {
        let token = localStorage.getItem('token');
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});
export default axios;