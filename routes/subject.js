const express = require('express')
const router = express()
const Model = require('../models')

router.get('/subjects',function(req,res){
    Model.Teacher.findAll(
        {
            include: [
                {
                    model: Model.Subject
                }
            ],
            order: [
                ['id', 'ASC'],
            ]
        }
    )
    .then(function(teachersData){
        //order by
        //let sorting = teachersData.sort(function(a, b){return a.id - b.id})
        res.render('subject',{teachersData})
    })
})

module.exports = router


