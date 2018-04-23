const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const model = require('./../models');

var Subject = model.Subject
var Teacher = model.Teacher

//BODY PARSER

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({extended:false})



router.get('/', function (req, res) {
  res.render('index')
})

router.get('/teachers', function (req, res) {
  Teacher.findAll({include: Subject.name}).then((teachers) => {
    res.render('teacher/teacher', {teachers: teachers})
  })
})

router.get('/teachers/add', function (req, res) {
  Subject.findAll().then((subjects) => {
    res.render('teacher/form_teacher', {subjects: subjects})
  }).catch((err) => {
    err = new Error('Something went wrong when collecting data')
    res.render('teacher/form_teacher', {err: err})
  })
})

router.post('/teachers/add', function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let subject = req.body.subjectName
  Subject.getIdByName(subject, (subjectId) => {
    Teacher.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      subjectId: subjectId,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then((newTeacher) => {
      // console.log(newTeacher);
      res.redirect('/teachers')
    }).catch((err) => {
      // res.send('ada eror buk')
      err = new Error('Email is not valid')
      res.render('teacher/form_teacher', {err: err})
    })
  })
  // res.send(req.body)
})

router.get('/teachers/update/:id', function (req, res) {
  let teacherId = req.params.id
  Teacher.findOne({
    include: Subject,
    where: {
      id: teacherId
    }
  }).then((teacher) => {
    Subject.findAll().then((subjects) => {

      // res.render('teacher/form_teacher', {subjects: subjects})
      res.render('teacher/form_update_teacher',
                  {
                    teacher: teacher,
                    subjects: subjects
      })
    })
  })
})

router.post('/teachers/update/:id', function (req, res) {
  let teacherId = req.params.id
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let subject = req.body.subjectName
  // console.log('----------------------------', subject);
  Subject.getIdByName(subject, (subjectId) => {
    Teacher.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      subjectId:subjectId,
      updatedAt: new Date()
    }, {
      where: {
        id: teacherId
      },
      validate: false
    }).then((newRecord) => {
      // console.log(newRecord);
      res.redirect('/teachers')
    }).catch((err) => {
      if (err) {
        res.render('teacher/form_update_teacher', {err: err})
        // res.send(err)
      }
    })
  })
})

router.get('/teachers/delete/:id', function (req, res) {
  let teacherId = req.params.id
  // console.log('----------------------------->', teacherId);
  Teacher.destroy({
    where: {
      id: teacherId
    }
  }).then(() => {
    res.redirect('/teachers')
  })
})



module.exports = router
