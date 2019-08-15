const db = require("../database/models");
const express = require('express')
const router = express.Router()

router.post('/new', (req, res) => {
    console.log('New Project', req.body)

    const {name, owner} = req.body

    db.Project.create({
        owner: owner,
        name: name
    })
    .then((dbProject) => {
        console.log('dbProject project.js 22: ', dbProject)
        db.Project.findOne({_id: dbProject._id})
            .populate('owner')
            .then( (dbProject) => res.json(dbProject))
    })
})

router.post('/col/new', (req, res) => {
    console.log('New project', req.body)

    const { name, project, index } = req.body 
    db.Column.create({
        name: name,
        project: project,
        index: index
    }).then(dbColumn => {
        console.log('dbColumn project.js 38: ', dbColumn)
        db.Column.findOne({_id: dbColumn._id})
            .populate('project')
            .then( dbColumn=> res.json(dbColumn))
            .catch( err => res.json(err))
    })
})

router.get('/mine', (req, res) => {
    console.log('My projects ', req.body)

    const { id } = req.body
    db.Project.find({owner: id}, (err, user) => {
        if(err) console.log('Error finding projects', err)
        else res.json(user)
    })
})

router.get('/shared', (req, res) => {
    
    const { user } = req.body
    db.Share.find({user: user}, (err, user) => {
        if (err) console.log('Err finding user share records')
        else res.json(user)
    })
})

module.exports = router
