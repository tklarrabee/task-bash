const db = require("../database/models");
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log('Send Invite')

    const { user, project, invited_by } = req.body
    const newInvite = new db.Share({
        user: user,
        project: project,
        invited_by: invited_by
    })
    db.Share.create({user, project, invited_by})
    
})
router.post('/verify', (req, res) => {
    const { user } = req.body
})

router.get('/pending/', (req, res) => {
    const { id } = req.body
})

module.exports = router