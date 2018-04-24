const db = require('../models')
const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    db.Teacher.findAll({ include: [db.Subject], order: ['id']})
    .then(teachers=>{
        res.render('teacher.ejs', {teachers})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/add', (req, res)=>{
    res.render('add-teacher.ejs', {title: 'Teacher Add Form'})
})

router.post('/add', (req, res)=>{
    db.Teacher.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    .then(redirect=>{
        res.redirect('/teachers')
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/edit/:id', (req, res)=>{
    let id = req.params.id  
    db.Teacher.findById(id)
    .then(teacher=>{
        db.Subject.findAll()
        .then(subject =>{
            res.render('edit-teacher.ejs', {teacher, subject})
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/edit/:id', (req, res)=>{
    let id = req.params.id
    db.Teacher.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        SubjectId: req.body.subject
    },{
        where: {id: id}
    })
    .then(redirect=>{
        res.redirect('/teachers')
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/delete/:id', (req, res)=>{
    db.Teacher.destroy({where: {id: req.params.id}})
    .then(teacher=>{
        res.redirect('/teachers')
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router