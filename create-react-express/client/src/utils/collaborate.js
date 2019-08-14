import axios from 'axios';

export default {
    sharedProjects: user => axios.get('/share/projects')
}