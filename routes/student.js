var express = require('express')
var router = express.Router();
const Model = require('../models');

router.get('/students', (req, res) => {
  Model.Student.findAll()
  .then((dataStudent) => {
    var obj = {info: dataStudent}
    res.render('../views/student', obj)
  })
})

router.get('/students/add', (req, res) => {
  res.render('../views/addStudent')
})

router.post('/students/add', (req, res) => {
  Model.Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then(function() {
    res.send('data saved')
  })
})

router.get('/students/edit/:id', (req, res) => {
  let student_id = req.params.id;

  Model.Student.findOne({
    where: {id: student_id}
  })
  .then(values => {
    let obj = {info: values};
    console.log(obj);
    res.render('../views/editStudent', obj)
  })
})

router.post('/students/edit/:id', (req, res) => {
  let student_id = req.params.id;
  Model.Student.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }, {
    where: {id: student_id}
  })
  .then(function() {
    res.send('data edited')
  })
})

router.get('/students/delete/:id', (req, res) => {
  let student_id = req.params.id;
  Model.Student.destroy({
    where: {id: student_id}
  })
  .then(function() {
    res.send('data deleted')
  })
})



module.exports = router;
