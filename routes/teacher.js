/*jshint esversion:6*/

const router = require('express').Router();
var bodyParser = require('body-parser');
const db = require('../models');
const app = require('express')();



router.get('/', (req, res) => {
  db.Teacher.findAll({
    include:[
      db.Subject
    ]
  })
  .then(teachersData => {
    res.render('../views/teacher.ejs',{datanyasiteachers:teachersData});
  });
});

router.post('/',(req,res)=>{
  db.Teacher.create({
    first_name : req.body.firstname,
    last_name : req.body.lastname,
    email : req.body.email
  })
  .then(
    res.redirect('/teacher')
  );
});


router.get('/edit/:id',(req,res)=>{
  db.Teacher.findById(req.params.id)
  .then(dataTeacherUpdate=>{
    res.render('../views/teacherEdit.ejs',{TeacherToUpdateEjs:dataTeacherUpdate});
  });
})

router.post('/edit/:id',(req,res)=>{
    let obj = {};
    obj.first_name =req.body.firstname,
    obj.last_name = req.body.lastname,
    obj.email = req.body.email
    return db.Teacher.findById(req.params.id)
    .then(Teacher=>{
      db.Teacher.update(obj,{where:{id:req.params.id}})
      .then(obj=>{
        res.redirect('/');
      });
    });
});

router.get('/edit/:id',(req,res)=>{
  db.Teacher.findById(req.params.id)
  .then(dataTeacherUpdate=>{
    res.render('../views/teacherEdit.ejs',{TeacherToUpdateEjs:dataTeacherUpdate});
  });
});

router.get('/delete/:id',(req,res)=>{
  db.Teacher.findById(req.params.id)
  .then(dataTeacherUpdate=>{
    db.Teacher.destroy({where: {id:req.params.id}})
    .then(obj=>{
      res.redirect('/teacher');
    });
  });
});

module.exports = router;
