const subject = require('express').Router();
const { Teacher, Subject } = require('../models')

subject.get('/', function(req,res){
  Subject.findAll()
  .then( subjects => {
    res.render('subject/list', {page:'list', Subjects: subjects})
  })
})

subject.get('/:id/teachers', function(req,res){
  Teacher.findAll({
    where: {SubjectId : req.params.id}
  })
  .then( teachers => {
    res.render('subject/list-teacher', {Teachers: teachers})
  })
})

subject.get('/add', function(req, res){
  res.render('subject/add')
})

subject.post('/add', function(req, res){
  Subject.create({
    subject_name : req.body.subject
  })
  .then((newSubject)=>{
    res.redirect('/subjects')
  })
})

subject.get('/edit/:id', function(req, res){
  Subject.findById(req.params.id)
  .then(subject => {
    res.render('subject/edit', {Subject: subject})
  })
})

subject.post('/edit/:id', function(req, res){
  Subject.update({
    subject_name : req.body.subject
  },{
    where: {
      id: req.params.id
    }
  })
  .then((newSubject)=>{
    res.redirect('/subjects')
  })
})

subject.get('/delete/:id', function(req, res){
  Subject.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(subject => {
    res.redirect('/subjects')
  })
})


module.exports = subject;
