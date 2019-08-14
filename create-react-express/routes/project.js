const db = require("../database/models");
const express = require('express')
const router = express.Router()

router.post('/new', (req, res) => {
    console.log('New Project', req.body)

    const {name, owner} = req.body
    const newProject = new db.Project({
        name: name,
        owner: owner
    })
    newProject.save((err, savedProject) => {
        if(err) res.json(err)
        else res.json(savedProject)
    })
})

module.exports = router
