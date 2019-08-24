import axios from 'axios';

export default {
    newProject: Project => axios.post('/project/new', Project),
    // { owner: "val", name: "val", description: "val"}

    newColumn: column => axios.post('/project/col',  column),
    // { name: "val", project: "val", index: "val" }

    newCard: card => axios.post('/project/card', card),
    // {body: "val", date: "val", user: "val", column: "val"}

    getProjects: () => axios.get('/project'),
    // { id: "val" }

    getBoard: project => axios.patch('/project/board', {project: project}),
    // { project: "val" }

    deleteCol: column => axios.delete('/project/col', column),
    // { id: "val" }
    
    deleteCard: card => axios.patch('/project/card', card),
    // { id: "val", column: ObjectId }
    
    deleteProject: project => axios.patch('/project', project),
    // { id: "val" }
 
    updateProject: project => axios.put('/project', project),
    // Only Id required, must use mongo field names
    //  { _id: "val", name: "val", owner: "val", description: "val"}
    
    updateCard: project => axios.put('/project/card', project),
    // Only Id required, must use mongo field names
    //  { _id: "val", name: "val", owner: "val", description: "val"}

    moveCard: swap => axios.put('/project/card/move', swap),
    // {column: "val", cards: [], newColumn: "val"}
    // Moves card between columns

    updateCol: column => axios.put('/col', column)
    // Only Id required, updates column fields
    // { _id: "val", name: "val", project: "val", index: 0}

}