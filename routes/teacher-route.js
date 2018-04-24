const express = require("express")
var router = express.Router()
var bodyParser = require('body-parser')
var model = require ('../models')
var subjectModel=model.Subject
var teacherModel=model.Teacher

router.get('/list',function(req,res){
    teacherModel.findAll(
        {
            include: [
                {
                    model:subjectModel
                }
            ],
        }
    )
    .then(function(teachers){
        res.render('teacher',{teacher:teachers})
    })
})


router.post('/add',function(req,res){
    console.log("isinya apa nh===>",req.body)
    teacherModel.create({
        first_name:req.body.firstname,
        last_name:req.body.lastname, 
        SubjectId:req.body.subject,
        email:req.body.email
    })
    .then(teacher=>{
        console.log(teacher)
        res.redirect('/teacher/list')
     })
     .catch(error=>{
         res.redirect('/errorpage')
     })
    
})

// router.get('/listone',function(req,res){
//     subjectModel.findOne({where:{id:3}}).then(subject=>{
//         subject.getTeachers().then(teachers=>{
//             res.render('teacher',{teachers:teachers})
//         })
//     })
// })

router.get('/delete/:id',function(req,res){
    console.log(req.params.id)
    teacherModel.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/teacher/list')
})

module.exports=router