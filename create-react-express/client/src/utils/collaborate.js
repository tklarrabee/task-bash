import axios from 'axios';

export default {
    pendingInvites: share => axios.get('/share/pending', share),
    verifyUser: username => axios.get('/share/verify', username),
    inviteResponse: share => axios.post('/share/accept', share),
    projectInvite: share => axios.post('/share/invite', share),
    getSharedProjects: user => axios.get('/share/projects', user),
    sentInvitations: share => axios.get('/share/sent', share),
    deleteInviteations: share => axios.delete('/share/invite', share)
}
