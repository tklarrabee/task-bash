const db = require("../database/models");
const express = require('express')
const router = express.Router()

router.get('/pending', (req, res) => {
    console.log('Pending Project Invites for User: ', req.body)
    const { id } = req.body
    db.Share.find({ user: id }, (err, pend) => {
        if(err) console.log('pending invite error ', err)
        else res.json(pend)
    })
})

router.post('/accept', (req, res) => {
    console.log('Invite response', req.body)
})

router.post('/invite', (req, res) => {
    console.log('Send Invite', req.body)
    const {user, invited_by, project} = req.body
    db.Share.findOne({user: user, project: project}, (err, share) => {
        if (err) {
            console.log('collaborate.js post error: ', err)
        } else if (share) {
            res.json({
                error: 'Invite already sent'
            })
        }
        else {
            const request = new db.Share({
                user: user,
                invitied_by: invited_by,
                project: project
            })
            request.save((err, savedRequest) => {
                if (err) return res.json(err)
                else res.json(savedRequest)
            })
        }
    })
})

// Find projects shared with a given user
router.get('/projects', (req, res) => {
    const { id } = req.body
    db.Share.find({ user: id }, (err, share) => {
        if (err) return res.json(err)
        else res.json(share)
        console.log(share)
    })
})

router.get('/sent', (req, res) => {
    const { id } = req.body
    db.Share.find({invited_by: id}, (err, sent) => {
        if (err) return res.json(err)
    })
})

module.exports = router