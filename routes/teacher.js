const teacher = require('express').Router();
const { Teacher, Subject } = require('../models')

// teacher.locals.teacherHelpers = require ('../helpers/teacherHelper')

teacher.get('/', function(req,res){
  Teacher.findAll({
    include: [{
      model: Subject
    }]
  })
  .then( teachers => {
    // console.log(teachers);
    res.render('teacher/list', {page:'list', Teachers: teachers})
  })
})

teacher.get('/add', function(req, res){
  Subject.findAll()
  .then( subjects => {
    res.render('teacher/add', {page:'add', Subjects: subjects})
  })
})

teacher.post('/add', function(req, res){
  // console.log(req.body);
  if(req.body.SubjectId === ''){
    req.body.SubjectId = null
  }
  Teacher.create({
    first_name : req.body.firstname,
    last_name : req.body.lastname,
    email : req.body.email,
    SubjectId : req.body.SubjectId
  })
  .then( newTeacher => {
    res.redirect('/teacher')
  })
  .catch(err => {
    res.render('error-message', {error: err})
  })
})

teacher.get('/edit/:id', function(req, res){
  Teacher.findById(req.params.id)
    .then(teacher => {
      Subject.findAll()
      .then( subjects => {
        // console.log(subjects);
        res.render('teacher/edit', {page:'edit', Subjects: subjects, teacher: teacher})
      })
    })
})

teacher.post('/edit/:id', function(req, res){
  // console.log(req.body);
  if(req.body.SubjectId === ''){
    req.body.SubjectId = null
  }
  Teacher.update({
    first_name : req.body.firstname,
    last_name : req.body.lastname,
    email : req.body.email,
    SubjectId : req.body.SubjectId
  }, {
    where: {id: req.params.id}
  })
  .then( newTeacher => {
    res.redirect('/teacher')
  })
  .catch(err => {
    res.render('error-message', {error: err})
  })
})

module.exports = teacher;
