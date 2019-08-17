const db = require("../database/models");
const express = require('express')
const router = express.Router()

// prefix /share
// project invites for signed in user
router.get('/pending', (req, res) => {
    console.log('Pending Project Invites for User: ', req.body)
    const { id } = req.body
    db.Share.find({user: id, accepted: false})
    .populate('user')
    .populate('invited_by')
    .populate('project')
    .exec((err, dbShare) => {
        if(err) res.json(err)
        else res.json(dbShare)
    })
})


// Find projects shared with logged in user
router.get('/projects', (req, res) => {
    const { id } = req.body
    db.Share.find({ user: id, accepted: true }) 
    .populate('user')
    .populate('invited_by')
    .populate('project')
    .exec((err, dbShare) => {
        if (err) res.json(err)
        else res.json(dbShare)
    })


    // .select('user -_id')
    // .then( dbShare => {
    //     const fuckMongo = []
    //     for(i = 0; i < dbShare.length ; i++){
    //         fuckMongo.push({_id: dbShare[i].user})
    //     }
    //     db.Project.find({_id: {$in: fuckMongo}})
            // res.json(dbShare)
    })


// pass accepted true or false depending on accepted or rejected
router.get('/sent', (req, res) => {
    const { id, accepted } = req.body
    db.Share.find({invited_by: id, accepted: accepted}, (err, sent) => {
        if (err) return res.json(err)
        else return res.json(sent)
    })
    .then( (dbInvites) => res.json(dbInvites))
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
        db.Share.findOne({ _id: id }, { accepted: accepted })
        // db.Share.findOneAndUpdate({ _id: id }, { accepted: accepted })
        .exec((err, dbShare) => {
            if (err) res.json(err)
            else dbShare.update({accepted: accepted})
            .exec((err, dbShare) => {
                if(err) res.json(err)
                else res.json(dbShare)
            })
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
    // const {user, project, invited_by} = req.body
    const {user, project, invited_by} = req.body
    // db.Share.findOne({user: user}, (err, share) => {
    db.Share.findOne({user: user, project: project, invited_by: invited_by}, (err, share) => {
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
                    // .populate('user')
                    // .populate('project')
                    // .populate('invited_by')
                    .then( (dbShare) => res.json(dbShare))
            })
        }
    })
})


router.delete('/invite', (req, res) => {
    const{ id } = req.body
    db.Share.deleteOne({ _id: id })
        .then( (deleted) => res.json(deleted))
})

module.exports = router