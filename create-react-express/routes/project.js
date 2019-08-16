const db = require("../database/models");
const express = require('express')
const router = express.Router()

// Prefix /project
// Create a new project
router.post('/new', (req, res) => {
    console.log('New Project', req.body)

    const { name, owner, description } = req.body

    db.Project.create({
        owner: owner,
        name: name,
        description: description
    })
        .then((dbProject) => {
            console.log('dbProject project.js 22: ', dbProject)
            db.Project.findOne({ _id: dbProject._id })
                .populate('owner')
                .then((dbProject) => res.json(dbProject))
        })
})

// Creates a new column
router.post('/col', (req, res) => {
    console.log('New project', req.body)

    const { name, project, index } = req.body
    db.Column.create({
        name: name,
        project: project,
        index: index
    }).then((err, dbColumn) => {
        console.log('dbColumn project.js 38: ', dbColumn)
        if (err) res.json(err)
        else res.json(dbColumn)
    })
})


// Create new Kanban card
router.post('/card', (req, res) => {
    console.log('New Card', req.body)

    const { user, date, body } = req.body

    db.Element.create({
        body: body,
        date: date,
        user: user
    }).then((dbElement) => {
        db.Column.findOneAndUpdate({}, { $push: { elements: dbElement._id } }, { new: true })
            .then((dbColumn) => {
                res.json(dbColumn)
            })
            .catch((err) => res.json(err))
    })

})


// get projects created by signed in ruser
router.get('/', (req, res) => {
    console.log('My projects ', req.body)

    const { id } = req.body
    db.Project.find({ owner: id }, (err, user) => {
        if (err) console.log('Error finding projects', err)
        else res.json(user)
    })
})

// get all columns and their related cards for a given project
router.get('/board', (req, res) => {
    console.log('Project Columns', req.body)

    const { project } = req.body
    db.Column.find({ project: project }, (err, project) => {
        if (err) console.log("Error loading columns", err)
        else res.json(project)
    })
        .populate('elements')
        .then((dbColumns) => res.json(dbColumns))
        .catch(err => res.json(err))
})

// delete column
router.delete('/col', (req, res) => {
    console.log('Delete Project: ', req.body)
    const { id } = req.body
    db.Column.deleteOne({ _id: id })
        .then((deleted) => res.json(deleted))
        .catch(err => res.json(err))
})

// delete card
router.delete('/card', (req, res) => {
    console.log('Delete Card: ', req.body)
    const { id } = req.body
    db.Element.deleteOne({ _id: id })
        .then((deleted) => res.json(deleted))
        .catch(err => res.json(err))
})

// delete project
router.delete('/', (req, res) => {
    console.log('Delete Project: ', req.body)
    const { id } = req.body
    db.Project.deleteOne({ _id: id })
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
})

router.put('/', (req, res) => {
    console.log('Update Project: ', req.body)
    const id = req.body.id
    db.Project.findOneAndUpdate({ _id: id }, req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.json({ error: 'Error updating project', text: err }))
})

// router.put('/col', (req, res) => {
//     console.log('Update Column: ', req.body)
//     const id = req.body.id
//     db.Column.findOneAndUpdate({ _id: id }, req.body)
//         .then(dbCol => res.json(dbCol))
//         .catch(err => res.json({ error: 'Error updating column', text: err }))
// })

router.put('/card', (req, res) => {
    console.log('Update card content: ', req.body)
    const id = req.body.id
    db.Project.findOneAndUpdate({ _id: id }, req.body)
        .then(dbProject => res.json(dbProject))
        .catch(err => res.json({ error: 'Error updating card', text: err }))
})

router.put('/card/move', (req, res) => {
    console.log('Pull and Push Cards: ', req.body)
    const { column, cards, newColumn } = req.body
    db.Column.findOne({ _id: column })
        .then(dbColumn => {
            const moveCards = []
            for (i = 0; i < cards.length; i++) {

                moveCards.push(cards[i])

                dbColumn.elements.remove({ _id: cards[i] })
            }
            db.Column.findOneAndUpdate({ _id: newColumn }, { $push: { elements: moveCards } }, { new: true })
                .then(dbNewCol => console.log(dbNewCol))
                .catch(err => res.json(err))
            dbColumn.save((err, oldCol) => {
                if (err) res.json(err)
                else res.json(oldCol)
            })
        });
})

router.put('/col', (req, res) => {
    console.log('Update Column: ', req.body)
    
    db.Column.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
        .then(dbColumn => {
            res.json(dbColumn)
        })
        .catch(err => res.json({ error: "Error updating Column", text: err }))
})


module.exports = router
