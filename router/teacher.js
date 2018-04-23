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
      // teachers.sort((a, b) => {
      //   if (a.id < b.id)
      //     return -1;
      //   if (a.id > b.id)
      //     return 1;
      //   return 0;
      // })
      // res.render('teacher', { teachers })
      res.send(teachers)
    })
});

teacher.get('/teachers/add', function (req, res) {
  res.render('addTeacher');
});
teacher.post('/teachers/add', urlencodedParser, function (req, res) {
  let teacherPost = req.body;
  Teacher.create({
    first_name: teacherPost.first_name,
    last_name: teacherPost.last_name,
    email: teacherPost.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
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