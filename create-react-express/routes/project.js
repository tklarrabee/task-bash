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
        name: name,
        owner: owner,
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
                // else res.json(dbProject)
                else db.Project.populate(dbProject, {path: 'columns', populate: {path: 'elements'}},
                (err, populated) => {
                    if(err) res.json(err)
                    else res.json(populated)
                }
                )
            })
    })
    
})


// Create new Kanban card
router.post('/card', (req, res) => {
    console.log('New Card', req.body, req.user)

    const { column, label, body, title } = req.body
    const { _id } = req.user
    db.Element.create({
        body: body,
        label: label,
        title: title,
        user: _id
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
            db.Column.populate(dbColumns, {
                path: 'columns.elements'
            }, (error, updatedColumn) => {
                if(error) res.json(error)
                else res.json(updatedColumn)
            })
            // if(err) res.json(err)
            // else res.json(dbColumns)
        })
        
        console.log(req.body)
        // .then((dbColumns) => res.json(dbColumns))
        // .catch(err => res.json(err))
})

// delete column
router.patch('/col', (req, res) => {
    console.log('Delete Column: ', req.body)
    const { id } = req.body
    db.Column.findOne({ _id: id }, (err, colForDel) => {
        console.log('FOUND THIS BITCH', colForDel)
        if(err) res.json(err)
        else if(colForDel.elements){
            const elementsForDel = colForDel.elements
            console.log('THIS BITCH HERE TOO', elementsForDel)
            // db.Element.delete(elementsForDel)
            // for( let i = 0; elementsForDel.length; i++) {
            //     db.Element.findOneAndDelete({_id: elementsForDel[i]}, err => 
            //         res.json({text: "Card Element deletion error",error: err}))
            // }
        // db.Elements.findById(elementsForDel, (err, elementsDel) => {
        //     if(err) res.json(err)
        //     else res.json(elementsDel)
        // })
            // db.Element.deleteMany({_id: {$in: elementsForDel}}, err => res.json(err))

        }
        db.Column.deleteOne(colForDel, err => res.json(err))
      
    })
        // .then((deleted) => res.json(deleted))
        // .catch(err => res.json(err))
})

// delete card
router.patch('/card', (req, res) => {
    console.log('Delete Card: ', req.body)
    const { id, column } = req.body
    db.Column.findOne({ _id: column })
    .then((dbColumn) => {
        dbColumn.elements.remove({ _id: id })
        db.Element.deleteOne({ _id: id })
        .then((deleted) => console.log(deleted))
        .catch( err => res.json({message: 'Deletion error for card element', error: err }))
        dbColumn.save((err, updatedCol) => {
            if (err) res.json(err)
            else if (updatedCol.elements){ db.Column.findOne(updatedCol, {populate: 'elements'})
                
                .exec((err, finalCol) => {
                    if (err) res.json(err)
                    else res.json(finalCol)
                })}
            else res.json(updatedCol)
        })
    })

})

// delete project
router.patch('/', (req, res) => {
    const { id }  = req.body
    const userId = req.user.id
    console.log('Delete Project: ', id)
    console.log(id)
    
    db.Project.deleteOne({_id: id})
        .then(deleted => {
            db.Project.find({ owner: userId }, (err, dbProjects) => {
                if (err) res.json(err)
                else res.json (dbProjects)
            })
        })
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

})


module.exports = router
