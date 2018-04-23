const app = require('express').Router();
const db = require('../models/index.js')


app.get('/', (req,res)=>{
    db.Teacher.findAll({order:[['id','ASC']],include: [{model: db.Subject}]}).then(teachers => {
        // res.send(teachers)
        res.render('../views/teacher.ejs', {
            teachers: teachers
        })
    })
})

module.exports = app
