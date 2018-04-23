const express = require('express')
const router = express()
const Model = require('../models')

router.get('/teachers',function(req,res){
    Model.Teacher.findAll()
    .then(function(teachersData){
        res.render('teacher',{teachersData, msg:false})
    })
    .catch(function(){
        res.render('teacher',{msg:'Data teacher tidak ditemukan'})
    })
})

router.get('/teachers/add',function(req,res){
    res.render('addTeacher',{msg:false})
})

router.post('/teacher/add',function(req,res){
    Model.Teacher.create(
        {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email:  req.body.email
        }
    )
    .then(function(){
        res.redirect('teachers')
    })
    .catch(function(err){
        res.render('addTeacher',{msg:err.errors[0].message})
    })
})

module.exports = router