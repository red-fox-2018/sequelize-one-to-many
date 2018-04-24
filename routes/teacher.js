var express = require('express')
var router = express.Router();
const Model = require('../models');

router.get('/teachers', (req, res) => {
  Model.Teacher.findAll({
    include: [Model.Subject],
    order: ['id']
  })
  .then(dataTeacher => {
    var obj = {info: dataTeacher}
    res.render('../views/teachers', obj)
  })
})

router.get('/teachers/add', (req, res) => {
  Model.Teacher.findAll({
    include: Model.Subject
  })
  .then(data => {
    Model.Subject.findAll()
    .then(function(data) {
      var obj = {info: data};
      res.render('../views/addTeacher', obj);
    })
  })
  .catch(err => {
    // console.log(err)
    res.send(err)
  })
})

router.post('/teachers/add', (req, res) => {
  Model.Teacher.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    SubjectId: req.body.subject_id
  })
  .then(function() {
    res.send('data teacher added')
  })
  .catch(function(err) {
    console.log(err.errors);
  })
})

router.get('/teachers/edit/:id', (req, res) => {
  let teacher_id = req.params.id;

  Model.Teacher.findOne({
    where: {id: teacher_id},
    include: Model.Subject
  })
  .then(values => {
    Model.Subject.findAll()
    .then(function(data) {
      let obj = {info: values, subjectInfo: data};
      res.render('../views/editTeacher', obj)
    })
  })
})

router.post('/teachers/edit/:id', (req, res, cb) => {
  let teacher_id = req.params.id;
  Model.Teacher.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    SubjectId: req.body.subject_id
  }, {
    where: {id: teacher_id}
  })
  .then(function() {
    res.redirect('/teachers')
  })
  .catch(err => {
    cb(err);
  })
})

router.get('/teachers/delete/:id', (req, res) => {
  let teacher_id = req.params.id;
  Model.Teacher.destroy({
    where: {id: teacher_id}
  })
  .then(function() {
    res.send('data deleted')
  })
})



module.exports = router
