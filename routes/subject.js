/*jshint esversion:6*/

const router = require('express').Router();
var bodyParser = require('body-parser');
const db = require('../models');
const app = require('express')();

router.get('/', (req, res) => {
  db.Subject.findAll()
  .then(subjectData => {
    res.render('../views/subjects/subject.ejs',{subjectDataEjs:subjectData});
  });
});

router.post('/',(req,res)=>{
  db.Subject.create({
    subject_name : req.body.subjectName,
  })
  .then(
    res.redirect('/subject')
  );
});

router.get('/delete/:id',(req,res)=>{
  db.Subject.findById(req.params.id)
  .then(dataSubjectUpdate=>{
    db.Subject.destroy({where: {id:req.params.id}})
    .then(obj=>{
      res.redirect('/subject');
    });
  });
});




module.exports = router;
