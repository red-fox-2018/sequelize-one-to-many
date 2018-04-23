const express = require('express');
const router = express();
const Model = require('../models');

Model.Teacher.findAll(
{include:{model:Model.Subject}}
).then(teachers=>{
    router.get('/', (req, res) => {
    res.render('subjects',{teachers})
    })
})

router.get('/addTeacher',(req,res)=>{
    res.render('addTeacher', { message: '' })
})

router.post('/addTeacher',(req,res)=>{
    
    Model.Teacher.create(req.body).then(result=>{
        res.redirect('/subjects')
    }).catch(err=>{
        res.render('addTeacher', { message: err.message})
    })
})


module.exports = router