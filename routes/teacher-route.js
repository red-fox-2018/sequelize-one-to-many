const express = require("express")
var router = express.Router()
var bodyParser = require('body-parser')
var model = require ('../models')
var Subject=model.Subject
var Teacher=model.Teacher


router.get('/teacher',function(req,res){
    teacher.findAll().then(teachers=>{
        res.render('teacher',{teachers:teachers})
    })
})

router.get('/teacher',function(req,res){
    Subject.findOne({where:{id:2}}).then(subject=>{
        subject.getTeachers().then(teachers=>{
            res.render('teacher',{teachers:teachers})
        })
    })
})

router.post('/teacher/add',function(req,res){
    
})
router.post('/teacher/:id')
module.exports=router