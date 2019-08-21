import axios from 'axios';

export default {
    login: user => axios.post('/user/login', user),
    logout: () => axios.post('/user/logout'),
    register: data => axios.post('/user/', data)
}