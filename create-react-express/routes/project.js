const db = require("../database/models");
const express = require('express')

// const passport = require('../passport')
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
                .then((dbProject) => res.json(dbProject))
        })
})

// Creates a new column
router.post('/col', (req, res) => {
    console.log('New Column', req.body)

    const { name, project, index } = req.body
    
    col = new db.Column({
        name: name,
        index: index
    })
    col.save(function(err, newCol) { 
        if(err) res.json(err)
        // else res.json(newCol) 
        else db.Project.findOneAndUpdate({_id: project}, { $push: { columns: newCol._id } }, { new: true })
            .exec((err, dbProject) => {
                if(err) res.json(err)
                else res.json(dbProject)
            })
    })
    
})


// Create new Kanban card
router.post('/card', (req, res) => {
    console.log('New Card', req.body, req.user)

    const { column, date, body, user } = req.body

    db.Element.create({
        body: body,
        date: date,
        user: user
    }).then((dbElement) => {
        db.Column.findOneAndUpdate({_id: column}, { $push: { elements: dbElement._id } }, { new: true })
            .then((dbColumn) => {
                res.json(dbColumn)
            })
            .catch((err) => res.json(err))
    })

})


// get projects created by signed in user
router.get('/', (req, res) => {
    console.log('My projects ') 
    console.log(req.user)

    const { id } = req.user
    db.Project.find({ owner: id }, (err, user) => {
        if (err) console.log('Error finding projects', err)
        else res.json(user)
    })
})

// get all columns and their related cards for a given project
router.patch('/board', (req, res) => {
    console.log('Project Id')
    // console.log(req.body)
    
    const { project } = req.body
    db.Project.findOne({ _id: project })
    // db.Column.find({ project: project }, (project) => {
        //     if (err) console.log("Error loading columns", err)
        //     else res.next(project)
        // })
        .populate({
            path: 'columns',
            populate: {path: 'elements'}
        })
        .exec((err, dbColumns) => {
            if(err) res.json(err)
            else res.json(dbColumns)
        })
        
        console.log(req.body)
        // .then((dbColumns) => res.json(dbColumns))
        // .catch(err => res.json(err))
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
    
    db.Column.findOne({ _id: req.body._id })
        .exec((err, dbColumn) => {
            if(err) res.json (err)
            else dbColumn.update( req.body , { new: true })
            .exec((err, colUpdate) => {
                if(err) res.json(err)
                else res.json(colUpdate)
            })
        })
        // .catch(err => res.json({ error: "Error updating Column", text: err }))

        const findAll= function(req, res) {
            db.Project.find(req.query)
              .then(dbProject => res.json(dbProject))
              .catch(err => res.status(422).json(err));
          }
          const findById= function(req, res) {
            db.Project.findById(req.params.id)
              .then(dbProject => res.json(dbProject))
              .catch(err => res.status(422).json(err));
          }
          const create= function(req, res) {
            db.Project.create(req.body)
              .then(dbProject => res.json(dbProject))
              .catch(err => res.status(422).json(err));
          }
          const update= function(req, res) {
            db.Project.findOneAndUpdate({ id: req.params.id }, req.body)
              .then(dbProject => res.json(dbProject))
              .catch(err => res.status(422).json(err));
          }
          const remove= function(req, res) {
            db.Project.findById(req.params.id)
              .then(dbProject => dbProject.remove())
              .then(dbProject => res.json(dbProject))
              .catch(err => res.status(422).json(err));
          }
          // Matches with "/api/books"
          router.route("/newproject")
            .get(findAll)
            .post(create);
          
          // Matches with "/api/books/:id"
          router
            .route("/:id")
            .get(findById)
            .put(update)
            .delete(remove);
})


module.exports = router
