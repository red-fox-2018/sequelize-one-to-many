const route = require('express').Router()
const {Student} = require('../models')

route.get('/', (req, res) => {
  Student.findAll()
  .then((students) => {
    res.render('students', {studentData: students})
  })
})

route.get('/add', (req, res) => {
  res.render('form_student')
})

route.post('/add', (req, res) => {
  Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then((newStudent) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('form_student', {message: err})
  })
})

route.get('/edit/:id', (req, res) => {
  Student.findById(req.params.id)
  .then((student) => {
    res.render('edit_form', {studentData: student})
  })
})

route.post('/edit/:id', (req, res) => {
  Student.findById(req.params.id)
  .then((student) => {
    student.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
    .then((edited) => {
      res.redirect('/')
    })
    .catch((err) => {
      res.render('/edit/:id')
    })
  })
})

route.get('/delete/:id', (req, res) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

module.exports = route
