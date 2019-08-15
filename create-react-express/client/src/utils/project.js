import axios from 'axios'

export default {
    newProject: project => axios.post('/project/new', project),
    newColumn: column => axios.post('/project/col', column),
    newCard: card => axios.post('/project/card', card),
    getProjects: user => axios.get('/project', user),
    getBoard: project => axios.get('/project/board', project),
    deleteCol: column => axios.delete('/project/col', column),
    deleteCard: card => axios.delete('/project/card', card),
    deleteProject: project => axios.delete('/project', project)
}