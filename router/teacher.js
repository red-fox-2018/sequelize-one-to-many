const teacher = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');
const Teacher = db.Teacher;
const Subject = db.Subject;

teacher.get('/', function (req, res) {
  res.redirect('/teachers');
})

teacher.get('/teachers', function (req, res) {
  Teacher.findAll({
    include: [{
      model: Subject
    }],
    order: [
      ['id', 'ASC']
    ]
  })
    .then(teachers => {
      res.render('teacher', {teachers})
    })
});

teacher.get('/teachers/add', function (req, res) {
  res.render('addTeacher');
});
teacher.post('/teachers/add', urlencodedParser, function (req, res) {
  let teacherPost = req.body;
  Teacher.create(teacherPost)
    .then(
      teacher => {
        res.redirect('/teachers');
      })
    .catch(
      error => {
        res.render('addTeacher', error.errors[0]);
      }
    )
})

teacher.get('/teachers/edit/:id', function (req, res) {
  let teacherId = req.params.id;

})
module.exports = teacher;