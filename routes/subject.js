const route = require('express').Router()
const {Subject, Teacher} = require('../models')

route.get('/', (req, res) => {
  Subject.findAll({
    include: [{
      model: Teacher
    }]
  })
  .then((subjects) => {
    res.render('subject', {subjectData: subjects})
  })
})

route.get('/add', (req, res) => {
  res.render('form_subject')
})

route.post('/add', (req, res) => {
  Subject.create({
    subject_name: req.body.subject_name
  })
  .then((newSubject) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('form_subject', err)
  })
})

route.get('/edit/:id', (req, res) => {
  Subject.findById(req.params.id)
  .then((subject) => {
    res.render('edit_form_subject', {subjectData: subject})
  })
})

route.post('/edit/:id', (req, res) => {
  Subject.findById(req.params.id)
  .then((subject) => {
    subject.update({
      subject_name: req.body.subject_name
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
  Subject.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

module.exports = route
