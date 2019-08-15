const db = require("../database/models");
const express = require('express')
const router = express.Router()

// project invites for signed in user
router.get('/pending', (req, res) => {
    console.log('Pending Project Invites for User: ', req.body)
    const { id } = req.body
    db.Share.find({ user: id, accepted: false, rejected: false }).then((err, pend) => {
        if(err) console.log('pending invite error ', err)
        else res.json(pend)
    })
    .populate('project')
    .populate('user')

})

// Check for valid user before creating invites
router.get('/verify', (req, res) => {
    console.log('Find user with matching name', req.body)
    const { username } = req.body
    db.User.findOne({username: username}, (err, user) => {
        if (err) res.json('collaborate.js verification error: ', err)
        else res.json(user)
    })
})

// Accept collaboration invite and keep share document, reject collaboration and delete share record
router.post('/accept', (req, res) => {
    console.log('Invite request', req.body)
    const { id, accepted, rejected } = req.body
    if (accepted) {
        db.Share.findOneAndUpdate({ _id: id }, { accepted: accepted }).then( (err, accept) => {
            if (err) {
                console.log('collaborate.js post error on "/share/accept": ', err)
            }
            else {
                res.json(accept)
            }
        })
    }

    else if (rejected) {
        db.Share.findOneAndDelete({ _id: id }, (err) => {
            if (err) {
                console.log('collaborate.js error deleting sharing collaboration invite: ', err)
            } else {
                res.json("Invite Declined, share deleted")
            }
        })
    }
    else {
        res.json({
            error: `collaborate.js error API call occurred without acceptance or rejection. Invitee: ${id}`
        })
    }

})

// Send invitation to users
router.post('/invite', (req, res) => {
    console.log('Send Invite', req.body)
    const {user, project, invited_by} = req.body
    db.Share.findOne({user: user, project: project}, (err, share) => {
        if (err) {
            console.log('collaborate.js post error: ', err)
        } else if (share) {
            res.json({
                error: 'Invite already sent'
            })
        }
        else {
            // const request = new 
            db.Share.create({
                user: user,
                invited_by: invited_by,
                project: project
            })
            .then((dbShare) => {
                console.log("dbShare collaborate.js 86: ", dbShare)
                db.Share.findOne({_id: dbShare._id})
                    .populate('user')
                    .populate('project')
                    .populate('invited_by')
                    .then( (dbShare) => res.json(dbShare))
            })
        }
    })
})

// Find projects shared with logged in user
router.get('/projects', (req, res) => {
    const { id } = req.body
    db.Share.find({ user: id }, (err, share) => {
        if (err) return res.json(err)
        else res.json(share)
        console.log(share)
    }).then((dbShare) => {
                console.log("dbShare collaborate.js 86: ", dbShare)
                db.Share.findOne({_id: dbShare._id})
                    .populate('user')
                    .populate('project')
                    .populate('invited_by')
                    .then( (dbShare) => res.json(dbShare))
            })
})

// Invitations sent by user
router.get('/sent', (req, res) => {
    const { id } = req.body
    db.Share.find({invited_by: id}, (err, sent) => {
        if (err) return res.json(err)
        else return res.json(sent)
    })
    .populate('user')
    .populate('project')
    .then( (dbInvites) => res.json(dbInvites))
})

router.delete('/invite', (req, res) => {
    const{ id } = req.body
    db.Share.deleteOne({ _id: id })
        .then( (deleted) => res.json(deleted))
})

module.exports = router