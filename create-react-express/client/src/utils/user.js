import axios from 'axios';
// lets's gooooo
export default {
    login: user => axios.post('/user/login', user),
    logout: () => axios.post('/user/logout'),
    register: data => axios.post('/user/', data)
}