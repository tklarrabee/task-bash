import axios from 'axios';

export default {

    pendingInvites: share => axios.get('/share/pending', share),
    // {id: "val"}

    verifyUser: username => axios.get('/share/verify', username),
    // {username: "val"}
    // use email address, not ObjectId

    inviteResponse: share => axios.post('/share/accept', share),
    // Updates share document
    // {id: "val", accepted: boolean, rejected: boolean}

    projectInvite: share => axios.post('/share/invite', share),
    // Creates new share doc
    // {user: "ObjectId", project: "ObjectId", invited_by: "ObjectId"}

    getSharedProjects: user => axios.get('/share/projects', user),
    // { id: "ObjectId"}
    // pass Id of logged in user to see 

    sentInvitations: share => axios.get('/share/sent', share),
    deleteInvitations: share => axios.delete('/share/invite', share)
}
