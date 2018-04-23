const routes = require('express').Router()
const Model = require('../models')
const Cteacher = require('../controllers/controllerTeacher')
const Cstudent = require('../controllers/controllerStudent')

routes.get('/',(req, res) => {
    res.render('index')
})

routes.get('/teachers',(req, res) => {
    Cteacher.listTeachers()
    .then(teachersData => {
        res.render('TeachersData',{teachersData})
    })
})

routes.get('/teachers/edit/:id',(req, res) => {
    Cteacher.findTeacher(req.params.id)
    .then(teacherData => {
        res.render('TeacherEditForm',{teacherData})        
    })
})
routes.post('/teachers/edit/:id',(req, res) => {
    let id = req.params.id
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    let subject_name = req.body.subject_name
    Cteacher.editTeacherData(id, first_name, last_name, email, subject_name)
    .then(() => {
        Cteacher.listTeachers()
        .then(teachersData => {
            res.render('TeachersData',{teachersData})
        })
    })
})

routes.get('/teachers/delete/:id',(req, res) => {
    let id = req.params.id
    Cteacher.deleteTeacherData(id)
    .then(() => {
        Cteacher.listTeachers()
        .then(teachersData => {
            res.render('TeachersData',{teachersData})
        })
    })
})

routes.get('/student/add', (req, res) => {
    res.render('addStudentForm')
})
routes.post('/student/add', (req, res) => {
    let first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    Cstudent.addStudent(first_name, last_name, email)
    .then(status => {
        if(status == true){
            res.render('addStudentForm')
        }
        else{
            console.log('---->',status)
            res.render('addStudentForm',{status: status})
        }
    })
})
module.exports = routes