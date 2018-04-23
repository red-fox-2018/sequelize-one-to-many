const express = require('express')
const router = express()
const model = require('../models')
const teacherModel=model.Teacher
const subjectModel=model.Subject

router.get('/subject',function(req,res){
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
        res.render('subject',{teacher:teachers})
    })
})

module.exports = router